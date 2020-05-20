import React, { useState, useEffect } from "react";

import axios from "axios";

import style from "./style.module.css";

export default function ParanaCases() {
  const [prCases, setPrCases] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://brasil.io/api/dataset/covid19/caso/data/?is_last=True&state=PR",
        {
          method: "GET",
        }
      )
      .then((response) => {
        const data = response.data.results;
        setPrCases(
          data.filter((item) => {
            return item.confirmed > 50 && item.city;
          })
        );
      });
  }, []);

  return (
    <div className={style.container}>
      <span className={style.titleContainer}>
        <span className={style.titleContainerText}> Paraná (Ranking) </span>
      </span>
      {prCases.map((item) => (
        <div className={style.wrapper} key={item.city_ibge_code}>
          <ul className={style.card}>
            <li className={`${style.item} ${style.itemWorld}`}>
              <span className={style.itemLabel}>Cidade</span>
              <span className={style.itemValue}>{item.city}</span>
            </li>
            <li className={`${style.item} ${style.itemWorld}`}>
              <span className={style.itemLabel}>Casos Confirmados:</span>
              <span className={style.itemValue}>{item.confirmed}</span>
            </li>
            <li className={`${style.item} ${style.itemWorld}`}>
              <span className={style.itemLabel}>Mortes:</span>
              <span className={style.itemValue}>{item.deaths}</span>
            </li>
            <li className={`${style.item} ${style.itemWorld}`}>
              <span className={style.itemLabel}>População Estimada:</span>
              <span className={style.itemValue}>
                {item.estimated_population_2019}
              </span>
            </li>
            <li className={`${style.item} ${style.itemWorld}`}>
              <span className={style.itemLabel}>Proporção</span>
              <span className={style.itemValue}>
                {parseInt(`${item.confirmed_per_100k_inhabitants}`)}
                <span className={style.itemCasesPer1M}>
                  a cada 100mil habitantes
                </span>
              </span>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
