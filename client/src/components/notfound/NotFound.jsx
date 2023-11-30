const error404 = "https://www.leawo.org/entips/wp-content/uploads/2021/04/Error-404-Costume-not-Found.jpg";

export default function NotFound(props) {

  return (
     <div>
         <img src={error404} alt="Not Found" />
     </div>
  );
}