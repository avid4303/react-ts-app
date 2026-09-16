type Post = {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
}

type PostDetail = {
  message: string;
  post: Post;
}

export const getPostDetailApi = async (id: string): Promise<PostDetail> =>{
  //APIの取得
  const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`)

  //400,505の判定
  if(!res.ok){
    throw new Error('API request failed');
  }

  return res.json();
}