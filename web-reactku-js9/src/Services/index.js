import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
const deleteNewsBlog = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

const getMahasiswa = () => GetAPI('posts?_sort=id&_order=desc');
const postMahasiswa = (dataYgDikirim) => PostAPI('posts', dataYgDikirim);
const deleteMahasiswa = (dataYgDihapus) => DeleteAPI('posts', dataYgDihapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog,

    getMahasiswa,
    postMahasiswa,
    deleteMahasiswa
}

export default API;
