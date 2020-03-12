import React, { useState } from "react";

export const Price = ({ bpi }) => {
  const [currencies, setCurrencies] = useState({
    usd: true,
    eur: false,
    gbp: false
  });
  const { usd, gbp, eur } = currencies;

  const handleBtn = e => {
    const val = e.target.textContent;
    switch (val) {
      case "GBP":
        setCurrencies({ usd: false, eur: false, gbp: true });
        break;
      case "EUR":
        setCurrencies({ usd: false, eur: true, gbp: false });
        break;
      default:
        setCurrencies({ usd: true, eur: false, gbp: false });
        break;
    }
  };
  return (
    <div>
      <div className="text-center">
      <button
        value={usd}
        className="btn btn-small btn-danger m-3"
        onClick={e => handleBtn(e)}
      >
        USD
      </button>
      <button
        value={gbp}
        className="btn btn-small btn-info m-3"
        onClick={e => handleBtn(e)}
      >
        GBP
      </button>
      <button
        value={eur}
        className="btn btn-small btn-warning m-3"
        onClick={e => handleBtn(e)}
      >
        EUR
      </button>
      </div>
      <ul className="list-group text-center">
        {usd && (
          <li className="list-group-item">
            Bitcoin rate for{" "}
            <span className="text-danger">{bpi.USD.description}</span> :{" "}
            <span className="badge badge-danger">{bpi.USD.code}</span>{" "}
            <strong>{bpi.USD.rate}</strong>
          </li>
        )}

        {gbp && (
          <li className="list-group-item">
            Bitcoin rate for <span className="text-info">{bpi.GBP.description}</span> : {" "}
            <span className="badge badge-info">{bpi.GBP.code}</span>{" "}
            <strong>{bpi.GBP.rate}</strong>
          </li>
        )}

        {eur && (
          <li className="list-group-item">
            Bitcoin rate for{" "}
            <span className="text-warning">{bpi.EUR.description}</span> :{" "}
            <span className="badge badge-warning">{bpi.EUR.code}</span>{" "}
            <strong>{bpi.EUR.rate}</strong>
          </li>
        )}
      </ul>
    </div>
  );
};
