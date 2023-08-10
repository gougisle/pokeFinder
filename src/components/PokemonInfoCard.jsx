import React, { useState } from "react";
import { ProgressBar, Button } from "react-bootstrap";
import { upperFirstLetter } from "../common-utils";
import "./pokemoninfocard.scss";

export default function PokemonInfoCard({ info }) {
  const [toggleSprite, setToggleSprite] = useState(true);

  const BASIC_INFO = info.basicData;
  const SPECIES_INFO = info.speciesData;
  console.log(info);

  //#region constants
  const WEIGHT_KILOGRAMS = convertToMetric(BASIC_INFO.weight);
  const WEIGHT_POUNDS = convertKgToLb(WEIGHT_KILOGRAMS);

  const HEIGHT_METERS = convertToMetric(BASIC_INFO.height);
  const HEIGHT_FEET_INCHES = formatHeight(HEIGHT_METERS);

  const TYPES = getTypeStrings(BASIC_INFO.types);

  //#endregion

  //#region conversion utils
  function convertToMetric(value) {
    return value / 10;
  }

  function convertKgToLb(weightKg) {
    const pounds = weightKg * 2.20462;
    const rounded = Math.round(10 * pounds) / 10;
    return rounded;
  }

  function convertMetersToInches(lengthMeters) {
    const inches = lengthMeters * 39.3701;
    return inches;
  }
  //#endregion

  function formatHeight(heightMeters) {
    const heightInches = convertMetersToInches(heightMeters);

    const feet = Math.floor(heightInches / 12);
    const inches = Math.round(heightInches % 12) / 100;
    const inchesStr = inches.toString().split(".")[1];

    let formattedHeight = "";
    if (feet > 0) {
      formattedHeight += `${feet}'`;
    }
    if (inches > 0) {
      formattedHeight += `${inchesStr}"`;
    }

    return formattedHeight;
  }

  function getTypeStrings(arrayOfTypes) {
    const typesAsStrings = arrayOfTypes.map((typeObj) =>
      upperFirstLetter(typeObj.type.name)
    );
    return typesAsStrings.join(", ");
  }

  function mapBaseStats(statObj) {
    const statValue = statObj.base_stat;
    const statName = statObj.stat.name.toUpperCase();
    let color;

    switch (true) {
      case statValue < 50:
        color = "danger";
        break;
      case statValue >= 50 && statValue <= 100:
        color = "warning";
        break;
      case statValue > 100 && statValue <= 150:
        color = "success";
        break;
      case statValue > 150:
        color = "primary";
        break;
      default:
        break;
    }
    return (
      <div className="m-3">
        <div></div>
        <ProgressBar
          now={statValue}
          max={200}
          variant={color}
          striped
          label={statName + " - " + statValue}
        ></ProgressBar>
      </div>
    );
  }

  return (
    <>
      <div className="container info-card-container">
        <div className="info-card-inner">
          <section className="info-card-header">
            <div>
              <img
                className="info-card-img "
                src={
                  toggleSprite
                    ? BASIC_INFO.sprites.front_default
                    : BASIC_INFO.sprites.back_default
                }
                alt=""
                onClick={() => {
                  setToggleSprite(!toggleSprite);
                }}
                title="Flip sprite"
              />
            </div>
            <div className="info-card-description">
              <div className="description-name">
                {upperFirstLetter(BASIC_INFO.name)}
              </div>
              <div className="description-items-row">
                <span> {TYPES}</span>
                <span>H: {HEIGHT_FEET_INCHES}</span>
                <span>W: {WEIGHT_POUNDS}lbs</span>
                <span>
                  <Button>Metric</Button>
                </span>
              </div>

              <div className="flavor-text">
                <i> "{SPECIES_INFO.flavor_text_entries[10].flavor_text}"</i>
              </div>
            </div>
          </section>
          <section className="info-card-stats">
            <div className="info-card-stats-inner">
              {BASIC_INFO.stats.map(mapBaseStats)}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
