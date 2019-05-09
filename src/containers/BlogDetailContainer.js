import{connect} from 'react-redux';
import BlogDetail from '../containers/BlogListContainer';

const mapStateToProps = (state) => {
    // need to find the post who's id was selected
    const id = state.selectedid;
    const post = state.posts[id]
    return {
        post: post
    }
}

const makeBlogDetailSmart = connect(
    mapStateToProps
);

const SmartBlogDetail = makeBlogDetailSmart(BlogDetail);
export default SmartBlogDetail;