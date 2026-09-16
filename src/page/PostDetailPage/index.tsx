import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostDetailApi } from "../../api/PostDetailApi";
import type { Post } from '../../types/Post';

import LoadingMessage from "../../compornents/posts/LoadingMessage";
import ErrorMessage from "../../compornents/posts/ErrorMessage";

export default function PostDetailPage() {

  const { id } = useParams<{id: string}>();

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  //API
  useEffect(() => {
    const getPostDetail = async () => {

      //idが存在しない場合
      if (!id) return;

      // 読み込み
      setLoading(true);
      setError("");

      try{
        // 記事IDを指定して記事詳細を取得
        const data = await getPostDetailApi(id);
        setPost(data.post);

      }catch(err){
        // API通信エラーをstateに保存
        setError("記事の取得に失敗しました");

      }finally{
        // API通信終了後にローディングを解除
        setLoading(false);
      }
    };
    
    getPostDetail();
  },[id]);

  /* 
  レンダリング処理
  */

  //初期画面
  if(!post){
    return <LoadingMessage />
  }

  //記事詳細読み込み時の画面
  if(loading){
    return <LoadingMessage />
  }

  //該当する記事が存在しない場合
  if(error){
    return <ErrorMessage />
  }
  
  return(

    /*
    記事詳細表示 
    ➀：記事画像
    ➁：投稿日
    ➂：カテゴリー
    ➃：タイトル
    ➄：本文
    ➅：記事一覧へ遷移
    */
    
    <div className="max-w-[800px] mx-auto pt-6 px-4 pb-12 flex flex-col gap-4">
      {/* ➀ */}
      <img src={post.thumbnailUrl} className="w-full object-cover" />

      <div className="flex flex-wrap items-center gap-2">
        {/* ➁ */}
        <time className="text-[0.95rem] text-gray-600" dateTime={post.createdAt}>
          {new Date(post.createdAt).toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        {/* ➂ */}
        <div className="flex flex-wrap gap-[6px]">
          {post.categories.map(categori => (
            <span className="py-1 px-2 rounded-full bg-gray-200 text-gray-700 text-[.8rem]" key={categori}>
              {categori}
            </span>
          ))}
        </div>
      </div>

      {/* ➃ */}
      <h1 className="m-0 text-[1.8rem] font-extrabold text-gray-900">{post.title}</h1>

      {/* ➄ */}
      <div className="whitespace-pre-wrap"
      dangerouslySetInnerHTML={{ __html: post.content.trim(), }}/>

      {/* ➅ */}
      <div className="mt-4">
        <Link to="/" className="text-blue-600 no-underline font-semibold hover:underline">記事一覧へ戻る</Link>
      </div>
    </div>
  );
}