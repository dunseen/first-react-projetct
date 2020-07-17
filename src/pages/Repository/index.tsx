import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronsLeft, FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/Logo.svg";

import { Headers, RepositoryInfo, Issues } from "./styles";

interface Repository {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<Repository>();
  return (
    <>
      <Headers>
        <img src={logoImg} alt="GithubExplorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Headers>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?v=4"
            alt="Rocketseat"
          />
          <div>
            <strong>Roecketseat/unfrom</strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>32</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="haha">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
