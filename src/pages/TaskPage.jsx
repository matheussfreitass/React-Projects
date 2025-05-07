import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title.jsx";
function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="min-h-screen flex items-start justify-center bg-slate-900 p-6">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-0 left-0 text-slate-100 p-2  rounded-b-lg  bg-size-10% bg-slate-950"
      >
        <ChevronLeftIcon />
      </button>
      {/* container centralizado */}
      <div className="relative w-full max-w-md space-y-6">
        {/* botão fixo no canto superior-esquerdo DESSE container */}

        <Title>Taks Manager</Title>
        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-2xl font-bold underline decoration-sky-500 text-slate-700">
            {title}
          </h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
