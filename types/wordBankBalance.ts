export interface WorldBankIndicator {
    symbol: string;
    country: string;
    category: string;
    dateTime: string;
    value: number;
    frequency: string;
    historicalDataSymbol: string;
    lastUpdate: string;
  }


export interface CountrySymbols {
    country: string;
    symbol: string;
}

export interface HistoricalDataItem {
    symbol: string;
    date: string;
    value: number;
  }