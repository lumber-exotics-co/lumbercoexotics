import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import * as actions from '../actions/index';
import * as V from 'victory'
import { VictorySharedEvents, VictoryBar, VictoryPie, VictoryLabel } from 'victory'

class AnalyticsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {

// <svg viewBox="0 0 450 350">
//   <VictorySharedEvents
//     events={[{
//       childName: ["pie", "bar"],
//       target: "data",
//       eventHandlers: {
//         onMouseOver: () => {
//           return [{
//             childName: ["pie", "bar"],
//             mutation: (props) => {
//               return {
//                 style: Object.assign({}, props.style, {fill: "tomato"})
//               };
//             }
//           }];
//         },
//         onMouseOut: () => {
//           return [{
//             childName: ["pie", "bar"],
//             mutation: () => {
//               return null;
//             }
//           }];
//         }
//       }
//     }]}
//   >
//     <g transform={"translate(150, 50)"}>
//       <VictoryBar name="bar"
//         width={300}
//         standalone={false}
//         style={{
//           data: { width: 20 },
//           labels: {fontSize: 25}
//         }}
//         data={[
//           {x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}, {x: "d", y: 4}
//         ]}
//         labels={["a", "b", "c", "d"]}
//         labelComponent={<VictoryLabel y={280}/>}
//       />
//     </g>
//     <g transform={"translate(0, -50)"}>
//       <VictoryPie name="pie"
//         width={250}
//         standalone={false}
//         style={{ labels: {fontSize: 25, padding: 10}}}
//         data={[
//           {x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}, {x: "d", y: 7}
//         ]}
//       />
//     </g>
//   </VictorySharedEvents>
// </svg> 
    let totals = {stain: {}, wood: {}, combo: {}};

    this.props.customerData.forEach(element=> {
      if (totals[element.wood] === undefined) totals[element.wood] = 1;
      else totals[element.wood]++;

      if (totals[element.stain] === undefined) totals[element.stain] = 1;
      else totals[element.stain]++;

      let combo = element.wood+ '/' +element.stain;
      if (totals[combo] === undefined) totals[combo] = 1;
      else totals[combo]++;
    })

    console.log(this.props.customerData)
    console.log(totals);

    return (
      <div>
        <div className="combinedChart"> Stains
          <svg viewBox="0 0 800 800">
            <VictorySharedEvents
              events={[{
                childName: ["pie", "bar"],
                target: "data",
                eventHandlers: {
                  onMouseOver: () => {
                    return [{
                      childName: ["pie", "bar"],
                      mutation: (props) => {
                        return {
                          style: Object.assign({}, props.style, {fill: "tomato"})
                        };
                      }
                    }];
                  },
                  onMouseOut: () => {
                    return [{
                      childName: ["pie", "bar"],
                      mutation: () => {
                        return null;
                      }
                    }];
                  },
                  onClick: () => {
                    return [{
                      target: "labels",
                      mutation: (props) => {
                        if (props.text === "Burgundy") {
                          return { text: totals["Burgundy"] }
                        } else if (props.text === "Cherry-Blossom") {
                          return { text: totals["Cherry-Blossom"] }
                        } else if (props.text === "Slate") {
                          return { text: totals["Slate"] }
                        } else if (props.text === "Pure-White") {
                          return { text: totals["Pure-white"] }
                        } else if (props.text === "Island-Water") {
                          return { text: totals["Island-Water"] }
                        } else if (props.text === "Honeydew") {
                          return { text: totals["Honeydew"] }
                        }
                      }
                    }];
                  }
                }
              }]}
            >
              <g transform={"translate(400, 50)"}>
                <VictoryBar name="bar"
                  text='Stains' 
                  width={300}
                  standalone={false}
                  style={{
                    data: { width: 20 },
                    labels: {fontSize: 15}
                  }}
                  data={[
                    {x: "Bur", y: totals["Burgundy"]}, {x: "C-B", y: totals["Cherry-Blossom"]}, {x: "HD", y: totals["Honeydew"]}, {x: "IW", y: totals["Island-Water"]}, {x: "PW", y: totals["Pure-white"]}, {x: "Sl", y: totals["Slate"]}
                  ]}
                  labels={["Burgundy", "Cherry-Blossom", "Honeydew", "Island-Water", "Pure-White", "Slate"]}
                  labelComponent={<VictoryLabel y={280} angle={90} verticalAnchor="middle" textAnchor="beginning"/>}
                />
              </g>
              <g transform={"translate(100, -50)"}>
                <VictoryPie name="pie"
                  width={250}
                  standalone={false}
                  style={{ labels: {fontSize: 15, padding: 20}}}
                  data={[
                    {x: "Burgundy", y: totals["Burgundy"]}, {x: "Cherry-Blossom", y: totals["Cherry-Blossom"]}, {x: "Honeydew", y: totals["Honeydew"]}, {x: "Island-Water", y: totals["Island-Water"]}, {x: "Pure-White", y: totals["Pure-white"]}, {x: "Slate", y: totals["Slate"]}
                  ]}
                />
              </g>
            </VictorySharedEvents>
          </svg>
        </div>

        <div className="combinedChart"> Wood
          <svg viewBox="0 0 800 800">
            <VictorySharedEvents
              events={[{
                childName: ["pie", "bar"],
                target: "data",
                eventHandlers: {
                  onMouseOver: () => {
                    return [{
                      childName: ["pie", "bar"],
                      mutation: (props) => {
                        return {
                          style: Object.assign({}, props.style, {fill: "tomato"})
                        };
                      }
                    }];
                  },
                  onMouseOut: () => {
                    return [{
                      childName: ["pie", "bar"],
                      mutation: () => {
                        return null;
                      }
                    }];
                  },
                  onClick: () => {
                    return [{
                      target: "labels",
                      mutation: (props) => {
                        if (props.text === "Ash") {
                          return { text: totals["ash"] }
                        } else if (props.text === "Birch") {
                          return { text: totals["birch"] }
                        } else if (props.text === "Cherry") {
                          return { text: totals["cherry"] }
                        } else if (props.text === "Maple") {
                          return { text: totals["maple"] }
                        } else if (props.text === "Pine") {
                          return { text: totals["pine"] }
                        } else if (props.text === "Red-Oak") {
                          return { text: totals["redoak"] }
                        }
                      }
                    }];
                  }
                }
              }]}
            >
              <g transform={"translate(400, 50)"}>
                <VictoryBar name="bar"
                  text='Stains' 
                  width={300}
                  standalone={false}
                  style={{
                    data: { width: 20 },
                    labels: {fontSize: 15}
                  }}
                  data={[
                    {x: "Ash", y: totals["ash"]}, {x: "Birch", y: totals["birch"]}, {x: "Cherry", y: totals["cherry"]}, {x: "Maple", y: totals["maple"]}, {x: "Pine", y: totals["pine"]}, {x: "Red-Oak", y: totals["redoak"]}
                  ]}
                  labels={["Ash", "Birch", "Cherry", "Maple", "Pine", "Red-Oak"]}
                  labelComponent={<VictoryLabel y={280} angle={90} verticalAnchor="middle" textAnchor="beginning"/>}
                />
              </g>
              <g transform={"translate(100, -50)"}>
                <VictoryPie name="pie"
                  width={250}
                  standalone={false}
                  style={{ labels: {fontSize: 15, padding: 20}}}
                  data={[
                    {x: "Ash", y: totals["ash"]}, {x: "Birch", y: totals["birch"]}, {x: "Cherry", y: totals["cherry"]}, {x: "Maple", y: totals["maple"]}, {x: "Pine", y: totals["pine"]}, {x: "Red-Oak", y: totals["redoak"]}
                  ]}
                />
              </g>
            </VictorySharedEvents>
          </svg>
        </div>
      </div>
    ) 
  }
}


const mapStateToProps = store => ({
    customerData: store.catalog.customerData
  });
  
  // Runs our action creator
  const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(actions.getData()),
  });


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnalyticsContainer));