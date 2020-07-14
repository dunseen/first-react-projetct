import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/Logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="github-logo" />
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/25330254?s=460&u=6eeb6a1dfb19e57679bcd816b2e899fc49cd15a5&v=4"
            alt="Davys Lima"
          />
          <div>
            <strong>dunseen/OSPMPA</strong>
            <p>A web system responsive using React.JS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/25330254?s=460&u=6eeb6a1dfb19e57679bcd816b2e899fc49cd15a5&v=4"
            alt="Davys Lima"
          />
          <div>
            <strong>dunseen/OSPMPA</strong>
            <p>A web system responsive using React.JS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/25330254?s=460&u=6eeb6a1dfb19e57679bcd816b2e899fc49cd15a5&v=4"
            alt="Davys Lima"
          />
          <div>
            <strong>dunseen/OSPMPA</strong>
            <p>A web system responsive using React.JS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
