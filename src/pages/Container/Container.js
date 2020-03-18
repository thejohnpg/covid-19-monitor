import React, { useState, useEffect } from "react";

import "./Container.css";

import axios from "axios";
import moment from 'moment';

export default function Container() {
  
  useEffect(() => {
    axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "1a592265e8msh058ba7cc33b0b19p1aabe7jsn84f25486d277",
      }
    })
    .then(response => {
      const data = response.data;
      setTotalCasesWorld(data.total_cases)
      setTotalDeathsWorld(data.total_deaths)
      setTotalRecoveredWorld(data.total_recovered)
      setNewCasesWorld(data.new_cases)
      setNewDeathsWorld(data.new_deaths)
      setStatisticTakenAt(data.statistic_taken_at)
    })
    axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "1a592265e8msh058ba7cc33b0b19p1aabe7jsn84f25486d277",

    }
  })
  .then(response => {
    const data = response.data.countries_stat;
    console.log(data);
    const dataBrazil = data.map((item) => {
      if (item.country_name.indexOf("Brazil"))
        return true
        setCases(item.cases)
        setDeaths(item.deaths)
        setTotaRecovered(item.total_recovered)
        setNewDeaths(item.new_deaths)
        setNewCases(item.new_cases)
        setSeriousCritical(item.serious_critical)
        setActiveCases(item.active_cases)
        setCasesPor1M(item.total_cases_per_1m_population)
        console.log('dataBrazil', item)
      })
    })
  })


  /* Brazil Cases*/
  const [totalCasesWorld, setTotalCasesWorld] = useState(0);
  const [totalDeathsWorld, setTotalDeathsWorld] = useState(0);
  const [totalRecoveredWorld, setTotalRecoveredWorld] = useState(0);
  const [newCasesWorld, setNewCasesWorld] = useState(0);
  const [newDeathsWorld, setNewDeathsWorld] = useState(0);
  const [statisticTakenAt, setStatisticTakenAt] = useState(new Date());

  console.log('date ------->',statisticTakenAt)
  /* */

  /* Brazil Cases*/
  const [cases, setCases] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [totalRecovered, setTotaRecovered] = useState(0);
  const [newDeaths, setNewDeaths] = useState(0);
  const [newCases, setNewCases] = useState(0);
  const [seriousCritical, setSeriousCritical] = useState(0);
  const [activeCases, setActiveCases] = useState(0);
  const [casesPor1M, setCasesPor1M] = useState(0);
  /* */
  

  return (
    <div className="containerComponent">
      <div className="cardComponent">
        <div className="card">
          <span className="title">Brasil</span>
            <ul className="containerCard">
              <li>Casos:</li> <li>{cases}</li>
              <li className="">Novos Casos:</li> <li className="">{newCases}</li>
              <li className="liCasesGreen">Recuperados:</li> <li className="liCasesGreen">{totalRecovered}</li>
              <li className="liCasesOrange">Casos Críticos:</li> <li className="liCasesOrange">{seriousCritical}</li>
              <li className="liCasesOrange">Casos Ativos:</li> <li className="liCasesOrange">{activeCases}</li>
              <li className="liCasesOrange">Casos por Milhão:</li> <li className="liCasesOrange">{casesPor1M}a cada 1M de habitantes</li>
              <li className="liCasesRed">Mortes:</li> <li className="liCasesRed">{deaths}</li>
              <li className="liCasesRed">Mortes Hoje:</li> <li className="liCasesRed">{newDeaths}</li>
            </ul>
        </div>
        <div className="card">
          <span className="title">Mundo</span>
          <ul className="containerCard">
              <li>Total de Casos:</li> <li>{totalCasesWorld}</li>
              <li className="liCasesGreen">Total de Recuperados:</li> <li className="liCasesGreen">{totalRecoveredWorld}</li>
              <li className="liCasesRed">Total de Mortes:</li> <li className="liCasesRed">{totalDeathsWorld}</li>
              <li className="liCasesOrange">Novos Casos:</li> <li className="liCasesOrange">{newCasesWorld}</li>
              <li className="liCasesRed">Mortes Hoje:</li> <li className="liCasesRed">{newDeathsWorld}</li>
            </ul>
          <div className="containerCard">
            <span></span>
          </div>
        </div>
            
      </div>
        <span className="lastStatistic">{`${statisticTakenAt}.${moment().locale('pt-br')}`}</span>
    </div>
  );
}
