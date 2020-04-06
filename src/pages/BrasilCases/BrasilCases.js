import React, { useState, useEffect, useCallback, Fragment } from "react";
import classNames from "classnames";
import axios from "axios";
import Fuse from "fuse.js";

import style from "./style.module.css";
import EmptyImage from "./../../assets/empty-data.webp";
import Loading from "./../../assets/three-dots.svg";

import { GoServer } from "react-icons/go";

export default function BrasilCases() {
  const [dataCases, setDataCases] = useState([]);
  const [filteredDataCases, setFilteredDataCases] = useState([]);
  const [statusServer, setStatusServer] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Request to Get Data
    axios
      .get("https://covid19-brazil-api.now.sh/api/report/v1", {
        method: "GET"
      })
      .then(response => {
        const data = response.data.data;
        setDataCases(data);
        setFilteredDataCases(data);

        setIsLoading(false);

        window.setTimeout(() => {
          setIsReady(true);
        }, 200); // wait for css transition
      });
  }, []);

    // Request to Get Status from Server
  axios
    .get("https://covid19-brazil-api.now.sh/api/status/v1", {
      method: "GET"
    })
    .then(response => {
      const data = response.data;
      setStatusServer(data)
    }, []);

    // Filter (Fuse.js) 
  const handleSearch = useCallback(event => {
      const { value } = event.target;
      setSearchTerm(value);

      if (!value) {
        setFilteredDataCases(dataCases);
        return;
      }
      const options = {
        keys: ["uf", "state"]
      };
      const fuse = new Fuse(dataCases, options);
      const result = fuse.search(value);
      setFilteredDataCases(result.map(data => data.item));
    },
    [dataCases]
  );

  return (
    <React.Fragment>
      <div className={style.filter}>
        <input
          type="text"
          className={style.filterInput}
          placeholder="Pesquise por Estado (Ex: Rio de Janeiro)"
          onChange={handleSearch}
        />
      </div>

      <div className={style.container}>
        {!isReady && (
          <div
            className={classNames(style.loading, {
              [style.loadingVisible]: isLoading
            })}
          >
            <img src={Loading} alt="" />
          </div>
        )}
        {filteredDataCases.length ? (
          filteredDataCases.map(value => (
            <div className={style.wrapper} key={value.uid}>
              <h4 className={style.title}> {value.state} </h4>

              <ul className={style.card}>
                <li className={style.item}>
                  <span className={style.itemLabel}>Casos:</span>
                  <span className={style.itemValue}>{value.cases}</span>
                </li>
                <li className={style.item}>
                  <span className={style.itemLabel}>Mortes:</span>
                  <span className={style.itemValue}>{value.deaths}</span>
                </li>
                <li className={style.item}>
                  <span className={style.itemLabel}>Suspeitos:</span>
                  <span className={style.itemValue}>{value.suspects}</span>
                </li>
                <li className={style.item}>
                  <span className={style.itemLabel}>Recuperados:</span>
                  <span className={style.itemValue}>{value.refuses}</span>
                </li>
              </ul>
            </div>
          ))
        ) : (
          <div className={style.empty}>
            <img
              classname={style.emptyImage}
              src={EmptyImage}
              alt="Nenhum estado foi encontrado"
            />
            <p className={style.emptyText}>
              Nenhum estado encontrado com o termo "{searchTerm}"
            </p>
          </div>
        )}
      </div>
      {/* last Update Server API */}
      <div className={style.lastupdateServer}>
        <span
          className={style.lastupdateServerText}
        > <GoServer size={16} color="#9dadcc" className={style.icon} /> Status Servidor  - {` ${statusServer.status}`.toUpperCase()} </span>
      </div>

    </React.Fragment>
  );
}
