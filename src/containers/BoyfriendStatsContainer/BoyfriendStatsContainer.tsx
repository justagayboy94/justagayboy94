import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { StatData, Stats } from "../../components/Stats/Stats";

interface Edge {
  node: {
    summary: string;
  };
}

interface QueryResponse {
  allIcal: {
    edges: Edge[];
  };
}

export class BoyfriendStatsContainer extends React.Component {
  public render() {
    return (
      <StaticQuery query={query}>
        {(data: QueryResponse) => (
          <Stats data={this.formatData(data.allIcal.edges)} />
        )}
      </StaticQuery>
    );
  }

  private formatData = (edges: Edge[]): StatData[] => {
    let daysLocked = 0;
    let daysUnlocked = 0;
    let ruinedOrgasms = 0;

    edges.forEach(edge => {
      if (edge.node.summary === "🔐") {
        daysLocked++;
      }

      if (edge.node.summary === "🔓") {
        daysUnlocked++;
      }

      if (edge.node.summary === "🔐💦") {
        ruinedOrgasms++;
      }
    });

    return [
      {
        label: "days locked",
        value: daysLocked
      },
      {
        label: "days unlocked",
        value: daysUnlocked
      },
      {
        label: "ruined orgasms",
        value: ruinedOrgasms
      }
    ];
  };
}

const query = graphql`
  query BoyfriendStats {
    allIcal {
      edges {
        node {
          summary
        }
      }
    }
  }
`;
