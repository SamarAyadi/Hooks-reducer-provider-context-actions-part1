import axios from "axios";
import Swal from "sweetalert2";

export const getAllArticles = async () => {
  try {
    const response = await axios.get("http://localhost:4000/articles");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteArticle =  (id) => {

    let status = 0
  return Swal.fire({
    title: "Are you sure?",
    text: "You want delete this article?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    try {
      if (result.isConfirmed) {
        const response = await axios.delete(
          `http://localhost:4000/articles/${id}`
        );
        status = response.status
        if (status === 200) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
         
          }
          return status
      }
    } catch (error) {
      console.error(error);
    }
  });
    
  
};
