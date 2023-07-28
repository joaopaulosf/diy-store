import notFound from "../../../public/not-found.svg";

export default function ErrorPage() {
  return (
    <div className="error">
      <img className="error__image" src={notFound} alt="page-not-found" />
    </div>
  );
}
