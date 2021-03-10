import React, { Suspense, useContext, useEffect } from 'react'
import { PostsWrapper } from './posts.style';
import { useDispatch, useSelector } from "react-redux";
import { readPosts } from '../../redux/actions/posts.action';
import { ViewContext } from '../../contexts/view.context';
const List = React.lazy(() => import('../List/List.component'));
const Case = React.lazy(() => import('../Case/Case.component'));

const Posts: React.FC = () => {
    const dispatch = useDispatch();
    const postsSelector = useSelector((state: any) => state.posts);

    const { viewState } = useContext(ViewContext);

    useEffect(() => {
        dispatch(readPosts());
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <PostsWrapper viewState={viewState}>
            <Suspense fallback={<h5>Loading content...</h5>}>
                {postsSelector.posts.map((post: any) => {
                    if(viewState === "list") {
                        return <List key={post._id} {...post} />
                    } else {
                        return <Case key={post._id} {...post} />
                    }
                })}
            </Suspense>
        </PostsWrapper>
    )
}

export default Posts;
