import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFound from "./components/page/NotFound.jsx";
import Top from "./components/page/Top.jsx";
import Lesson from "./components/page/Lesson.jsx";
import Team from "./components/page/Team.jsx";
import Studio from "./components/page/Studio.jsx";
import Contact from "./components/page/Contact.jsx";
import Thanks from "./components/page/Thanks.jsx";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  opacity: ${({ load }) => (load ? 1 : 0)};
  transform: ${({ load }) => (load ? "scale(1)" : "scale(2)")};
  transition: all 1.4s;
`;

const Index = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);
  return (
    <Router>
      <Header />
      <Container load={load}>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route path="/lesson" component={Lesson} />
          <Route path="/team" component={Team} />
          <Route path="/studio" component={Studio} />
          <Route path="/contact" component={Contact} />
          <Route path="/thanks" component={Thanks} />
          <Route component={NotFound} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
};

render(<Index />, document.getElementById("root"));
