import React from "react";
import "../../stylesheets/components/GestorDetailInfo.scss";
import AsideBarButton from "../AsideBarButton";

const GestorDetailInfo = () => {
  return (
    <div className="detail__box">
      <div className="detail__description">
        <p>Nombre:</p>
        <p>Proyecto:</p>
        <p>Jefe de proyecto:</p>
        <p>Cliente:</p>
        <p>Oficina:</p>
        <p>Vacaciones:</p>
      </div>
      <div>
        <div className="detail__info">
          <p>Jesús Esteban Sánchez</p>
          <p>Wadus</p>
          <p>José María de la Nieta</p>
          <p>Wadus S.A.</p>
          <p>Liquid Squad Madrid</p>
          <p>
            Desde <span className="detail__info--bold">13/09/2019</span> al
            <span className="detail__info--bold"> 22/09/2019</span>
          </p>
        </div>
      </div>
      <div className="detail__button">
        <button className="detail__button--approve">Aprobar</button>
        <button className="detail__button--deny ">Rechazar</button>
        <AsideBarButton />
      </div>
    </div>
  );
};

export default GestorDetailInfo;
