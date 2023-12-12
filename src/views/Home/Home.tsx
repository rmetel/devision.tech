import React from "react";

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
    <section
      id="home"
      className="header"
      data-scroll-index="0"
      style={{
        backgroundImage: "url(img/tunnel-2033983_1280.jpg)",
      }}
      data-stellar-background-ratio="0.8">
      <div className="v-middle">
        <div className="container">
          <div className="row">
            <div className="caption">
              <h5>Willkommen</h5>
              <h1 className="cd-headline clip">
                <span className="blc">bei&nbsp;</span>
                <span className="cd-words-wrapper">
                  <b className="is-visible">Metzner Gruppe</b>
                  <b>Photovoltaik Experten</b>
                </span>
              </h1>

              <div className="social-icon">
                <a href="#0">
                  <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
                </a>
                <a href="#0">
                  <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
                </a>
                <a href="#0">
                  <span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                </a>
                <a href="#0">
                  <span><i className="fa fa-behance" aria-hidden="true"></i></span>
                </a>
                <a href="#0">
                  <span><i className="fa fa-youtube" aria-hidden="true"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
