import React, { useState } from "react";
import { Container, Spinner, Button } from "react-bootstrap";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/themes";
import  DarkModeToggler  from "./components/darkMode-toggler";

import logo  from "./assests/GitHub-Mark-120px-plus.png";

import "./App.css";
import useFetchJobs from "./components/useFetchJobs";
import Job from "./components/Job";
import JobsPagination from "./components/JobsPagination";
import SearchForm from "./components/SearchForm";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const App = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleParamChange = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
    <>
      <Container className="my-4">
        <div className="header">
          <h1 className="mb-4">
            <img src={logo} alt="logo" style={{ marginRight: "6px", marginBottom: "4px", height:"50px", width:"50px"}} />
            Github Jobs
          </h1>
           
          <button onClick={() => themeToggler()} style={{background:"transparent", border:"none",marginBottom:"20px",marginLeft:"14px"}} ><DarkModeToggler/></button>  
          
        </div>
        <SearchForm params={params} onParamChange={handleParamChange} />
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
        {loading && (
          <Button
            variant="outline-success"
            disabled
            size="lg"
            block
            className="mb-3"
          >
            <Spinner
              as="span"
              animation="grow"
              variant="success"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Gathering Avaliable Jobs
          </Button>
        )}
        {error && (
          <Button variant="outline-warning" size="lg" block className="mb-3">
            <p>sorry, kindly refresh or check your internet connection</p>
          </Button>
        )}
        {jobs
          .filter((job, idx) => idx < 20)
          .map((job) => {
            return <Job key={job.id} job={job} />;
          })}
        <JobsPagination
          className="pages"
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
      </Container>
    </>
    </StyledApp>
    </ThemeProvider>
  );
};

export default App;
