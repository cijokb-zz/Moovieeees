//@flow
import React from "react";
import { Chart } from "react-charts";

let customToolTip = ({ datum, primaryAxis, getStyle }) =>
  datum ? (
    <div
      style={{
        color: 'white',
        pointerEvents: 'none',
      }}
    >
      <h3
        style={{
          display: 'block',
          textAlign: 'center',
        }}
      >
        {primaryAxis.format(datum.primary)}
      </h3>
      <div
        style={{
          width: '400px',
          height: '150px',
          background: 'white',
          display: 'flex',
        }}
      >
        <div
          style={{
            flex: '0 0 50%',
          }}
        >
          <Chart
            data={datum.group}
            series={{ type: 'bar' }}
            getSeries={data => [
              {
                datums: data.map(d => ({
                  x: d.seriesLabel,
                  y: d.secondary,
                  color: getStyle(d).fill,
                })),
              },
            ]}
            axes={[
              { type: 'ordinal', primary: true, position: 'bottom' },
              { type: 'linear', stacked: true, position: 'left' },
            ]}
            getDatumStyle={datum => ({
              color: datum.originalDatum.color,
            })}
            primaryCursor={{
              value: datum.seriesLabel,
            }}
          />
        </div>
        <img
          src="https://media.giphy.com/media/26AHLBZUC1n53ozi8/giphy.gif"
          alt=""
          style={{
            width: '200px',
            height: 'auto',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </div>
    </div>
  ) : null;

type Props = {
  data: Array<any>
}

const LineChart = ({ data }: { data: Props }) => (
  // A react-chart hyper-responsively and continuusly fills the available
  // space of its parent element automatically
  <Chart
    data={data}
    //dark
    series={{
      type: 'area', //'area','bubble','bar','pie'
      showPoints: true,
      showOrphans: true,
      curve: 'monotoneX'
    }}
    axes={[
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ]}
    tooltip={{ render: customToolTip }}
    primaryCursor
    secondaryCursor
  />
);

export default LineChart;

//****************************************CHART PROPS******************************** */

/*CHART props

  Chart.propTypes = {
  data: PropTypes.any.isRequired,
  groupMode: PropTypes.oneOf([
    groupModeSingle,
    groupModeSeries,
    groupModePrimary,
    groupModeSecondary
  ]).isRequired,
  showVoronoi: PropTypes.bool,
  dark: PropTypes.bool,
  series: seriesPropType,
  axes: PropTypes.arrayOf(axisShape),
  primaryCursor: cursorShape,
  secondaryCursor: cursorShape,
  tooltip: tooltipShape,
  renderSVG: PropTypes.func,
  getSeries: PropTypes.func.isRequired,
  getDatums: PropTypes.func.isRequired,
  getLabel: PropTypes.func.isRequired,
  getSeriesID: PropTypes.func.isRequired,
  getPrimary: PropTypes.func.isRequired,
  getSecondary: PropTypes.func.isRequired,
  getR: PropTypes.func.isRequired,
  getPrimaryAxisID: PropTypes.func.isRequired,
  getSecondaryAxisID: PropTypes.func.isRequired,
  getSeriesOrder: PropTypes.func.isRequired,
  getSeriesStyle: PropTypes.func,
  getDatumStyle: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onHover: PropTypes.func
}

Chart.defaultProps = {
  getSeries: d => d,
  getDatums: d => (Array.isArray(d) ? d : d.datums || d.data),
  getLabel: (d, i) => d.label || `Series ${i + 1}`,
  getSeriesID: (d, i) => i,
  getPrimary: d => (Array.isArray(d) ? d[0] : d.primary || d.x),
  getSecondary: d => (Array.isArray(d) ? d[1] : d.secondary || d.y),
  getR: d => (Array.isArray(d) ? d[2] : d.radius || d.r),
  getPrimaryAxisID: s => s.primaryAxisID,
  getSecondaryAxisID: s => s.secondaryAxisID,
  getSeriesStyle: () => ({}),
  getDatumStyle: () => ({}),
  getSeriesOrder: d => d,
  onHover: () => {},
  groupMode: groupModePrimary,
  showVoronoi: false
}
*/