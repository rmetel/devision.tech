import React from "react";
import { Contact, Hero, Numbers, Portfolio, Services } from "~/components";

export const Home: React.FC = () => {
  // const { taskId } = useParams();
  // const [task, setTask] = useState({ id: "", description: "", done: false });
  // const [isLoading, setIsLoading] = useState(false);

  // const apiUrl = getApiUrl();

  /*const saveTask = (task: Task) => {
    const params = {
      id: task.id,
      description: task.description,
      done: task.done,
    };

    axios
      .put(apiUrl + "/tasks/" + task.id, params)
      .then(() => {
        showToast(`Task "${task.description}" wurde aktualisiert!`, "success");
      })
      .catch((error) => {
        showToast(`${error.name}: ${error.message}`, "error");
      });
  };

  useEffect(() => {
    setIsLoading(true);

    fetch(apiUrl + "/tasks/" + taskId)
      .then((response) => response.json())
      .then((task) => {
        setIsLoading(false);
        setTask(task);
      });
  }, [apiUrl, taskId]);*/

  return (
    <>
      <Hero />
      <Services />
      <Numbers />
      <Portfolio />
      <Contact />
    </>
  );
};
