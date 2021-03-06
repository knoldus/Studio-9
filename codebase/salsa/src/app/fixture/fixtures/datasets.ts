import { IFixtureDataset } from '../fixture.interface';

export const datasets: {
  data: IFixtureDataset[],
  options: any,
} = {
  data: [
    {
      id: 'census_populations_by_zip_code',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/2010_Census_Populations_by_Zip_Code.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'demographic_statistics_by_zip_code',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/Demographic_Statistics_By_Zip_Code.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'heart_disease_mortality',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/Heart_Disease_Mortality_Data_Among_US_Adults__35___by_State_Territory_and_County.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'prostate_cancer_out',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/prostate_cancer_out.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'prostate_cancer',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/prostate_cancer.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'datasetIdVolumesPredicted',
      data: [
        [ 0.9, 0.1, 1.4, 0.126, 0.12632 ],
        [ 0.1, 0.2, 1.5, 0.03, 0.0332 ],
        [ 0.11, 0.3, 1.6, 0.0528, 0.052832 ],
        [ 0.12, 0.4, 1.7, 0.0816, 0.081632 ],
        [ 0.13, 0.5, 1.8, 0.117, 0.11732 ],
        [ 0.14, 0.6, 1.9, 0.1596, 0.159632 ],
        [ 0.15, 0.7, 1.1, 0.1155, 0.115532 ],
        [ 0.16, 0.8, 1.11, 0.14208, 0.1420832 ],
        [ 0.17, 0.9, 1.12, 0.17136, 0.1713632 ],
        [ 0.18, 0.1, 1.13, 0.02034, 0.0203432 ],
        [ 0.19, 0.11, 1.14, 0.023826, 0.02382632 ],
        [ 0.2, 0.12, 1.15, 0.0276, 0.027632 ],
        [ 0.21, 0.13, 1.16, 0.031668, 0.03166832 ],
        [ 0.22, 0.14, 1.17, 0.036036, 0.03603632 ],
        [ 0.23, 0.15, 1.18, 0.04071, 0.0407132 ],
        [ 0.24, 0.16, 1.19, 0.045696, 0.04569632 ],
        [ 0.25, 0.17, 1.2, 0.051, 0.05132 ],
        [ 0.26, 0.18, 1.21, 0.056628, 0.05662832 ],
        [ 0.27, 0.19, 1.22, 0.062586, 0.06258632 ],
        [ 0.28, 0.2, 1.23, 0.06888, 0.0688832 ],
        [ 0.29, 0.21, 1.24, 0.075516, 0.07551632 ],
        [ 0.3, 0.22, 1.25, 0.0825, 0.082532 ],
        [ 0.31, 0.23, 1.26, 0.089838, 0.08983832 ],
        [ 0.32, 0.24, 1.27, 0.097536, 0.09753632 ],
        [ 0.33, 0.25, 1.28, 0.1056, 0.105632 ],
        [ 0.34, 0.26, 1.29, 0.114036, 0.11403632 ],
        [ 0.35, 0.27, 1.3, 0.12285, 0.1228532 ],
        [ 0.36, 0.28, 1.31, 0.132048, 0.13204832 ],
        [ 0.37, 0.29, 1.32, 0.141636, 0.14163632 ],
        [ 0.38, 0.3, 1.33, 0.15162, 0.1516232 ],
        [ 0.39, 0.31, 1.34, 0.162006, 0.16200632 ],
        [ 0.4, 0.32, 1.35, 0.1728, 0.172832 ],
        [ 0.41, 0.33, 1.36, 0.184008, 0.18400832 ],
        [ 0.42, 0.34, 1.37, 0.195636, 0.19563632 ],
        [ 0.43, 0.35, 1.38, 0.20769, 0.2076932 ],
        [ 0.44, 0.36, 1.39, 0.220176, 0.22017632 ],
        [ 0.45, 0.37, 1.4, 0.2331, 0.233132 ],
      ],
      count: 37,
    },
    {
      id: 'datasetIdVolumes',
      data: [
        [ 0.9, 0.1, 1.4, 0.126 ],
        [ 0.1, 0.2, 1.5, 0.03 ],
        [ 0.11, 0.3, 1.6, 0.0528 ],
        [ 0.12, 0.4, 1.7, 0.0816 ],
        [ 0.13, 0.5, 1.8, 0.117 ],
        [ 0.14, 0.6, 1.9, 0.1596 ],
        [ 0.15, 0.7, 1.1, 0.1155 ],
        [ 0.16, 0.8, 1.11, 0.14208 ],
        [ 0.17, 0.9, 1.12, 0.17136 ],
        [ 0.18, 0.1, 1.13, 0.02034 ],
        [ 0.19, 0.11, 1.14, 0.023826 ],
        [ 0.2, 0.12, 1.15, 0.0276 ],
        [ 0.21, 0.13, 1.16, 0.031668 ],
        [ 0.22, 0.14, 1.17, 0.036036 ],
        [ 0.23, 0.15, 1.18, 0.04071 ],
        [ 0.24, 0.16, 1.19, 0.045696 ],
        [ 0.25, 0.17, 1.2, 0.051 ],
        [ 0.26, 0.18, 1.21, 0.056628 ],
        [ 0.27, 0.19, 1.22, 0.062586 ],
        [ 0.28, 0.2, 1.23, 0.06888 ],
        [ 0.29, 0.21, 1.24, 0.075516 ],
        [ 0.3, 0.22, 1.25, 0.0825 ],
        [ 0.31, 0.23, 1.26, 0.089838 ],
        [ 0.32, 0.24, 1.27, 0.097536 ],
        [ 0.33, 0.25, 1.28, 0.1056 ],
        [ 0.34, 0.26, 1.29, 0.114036 ],
        [ 0.35, 0.27, 1.3, 0.12285 ],
        [ 0.36, 0.28, 1.31, 0.132048 ],
        [ 0.37, 0.29, 1.32, 0.141636 ],
        [ 0.38, 0.3, 1.33, 0.15162 ],
        [ 0.39, 0.31, 1.34, 0.162006 ],
        [ 0.4, 0.32, 1.35, 0.1728 ],
        [ 0.41, 0.33, 1.36, 0.184008 ],
        [ 0.42, 0.34, 1.37, 0.195636 ],
        [ 0.43, 0.35, 1.38, 0.20769 ],
        [ 0.44, 0.36, 1.39, 0.220176 ],
        [ 0.45, 0.37, 1.4, 0.2331 ],
      ],
      count: 37,
    },
    {
      id: 'datasetIdFlights',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/flights.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'tableIdCities',
      data: [
        ['Ru', 'Tomsk', 'a', 1000, 5000, 600000],
        ['Ru', 'Tomsk', 'abc', 1000, 5000, 600000],
        ['Ru', 'Tomsk', 'ab', 1000, 5000, 600000],
        ['Ru', 'Tomsk', 'ab', 2000, 5000, 600000],
        ['Ru', 'Tomsk', 'ab', 1000, 5000, 600000],
        ['US', 'Omsk', 'a', 3000, 150000],
        ['US', 'Omsk', 'ab', 4000, 150000],
        ['US', 'Omsk', 'abc', 4000, 150000],
        ['US', 'NY', 'a', 4000, 6000, 7000000],
        ['US', 'NY', 'ab', 4000, 6000, 7000000],
        ['Ru', 'Moscow', 'abc', 13000, 20000, 13000000],
        ['Ru', 'Omsk', 'a', 2000, 3000, 100000],
        ['Ru', 'Washington', 'ab', 10000, 20000, 10000],
        ['US', 'Washington', 'abc', 10000, 20000, 100000],
        ['US', 'SF', 'a', 3000, 4000, 3000000],
      ],
      count: 15,
    },
    {
      id: 'us_cities',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/cities_population.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'tableIdClusteringInput1',
      data: [
        [ 30.6746000000, -88.0902000000 ],
        [ 33.3549000000, -86.9919000000 ],
        [ 34.7346000000, -86.6032000000 ],
        [ 33.5107000000, -86.8821000000 ],
        [ 33.5502000000, -86.6463000000 ],
        [ 33.4757000000, -86.7962000000 ],
        [ 34.6976000000, -86.5835000000 ],
        [ 33.3609000000, -86.9974000000 ],
        [ 30.5863000000, -88.1956000000 ],
        [ 32.3371000000, -86.2521000000 ],
        [ 33.5101000000, -86.8812000000 ],
        [ 30.7054000000, -88.1364000000 ],
        [ 33.5193000000, -86.8078000000 ],
        [ 32.3399000000, -86.2159000000 ],
        [ 33.4433000000, -86.8337000000 ],
        [ 30.6910000000, -88.0708000000 ],
        [ 32.3897000000, -87.0762000000 ],
        [ 33.4929000000, -86.8279000000 ],
        [ 32.3522000000, -86.3283000000 ],
        [ 32.4509000000, -85.0069000000 ],
        [ 30.6784000000, -88.1140000000 ],
        [ 30.6414000000, -88.1467000000 ],
        [ 30.6974000000, -88.1340000000 ],
        [ 31.0332000000, -87.4066000000 ],
        [ 33.5162000000, -86.7424000000 ],
        [ 30.4112000000, -87.6005000000 ],
        [ 34.0143000000, -86.0145000000 ],
        [ 32.2934000000, -87.7977000000 ],
        [ 34.0229000000, -85.9888000000 ],
        [ 32.4208000000, -85.7154000000 ],
        [ 30.6002000000, -87.9033000000 ],
        [ 33.1740000000, -87.5276000000 ],
        [ 33.3591000000, -86.7341000000 ],
        [ 34.8046000000, -87.6629000000 ],
        [ 33.7176000000, -85.8147000000 ],
        [ 34.8470000000, -87.6587000000 ],
        [ 34.5331000000, -86.9992000000 ],
        [ 30.6966000000, -88.0533000000 ],
        [ 32.2757000000, -86.6130000000 ],
        [ 33.4987000000, -86.7879000000 ],
        [ 34.6907000000, -86.5726000000 ],
      ],
      count: 41,
    },
    {
      id: 'tableIdClusteringResults1',
      data: [
        [ 30.6746000000, -88.0902000000, 0, 30.809091666666664, -87.97075833333334 ],
        [ 33.3549000000, -86.9919000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 34.7346000000, -86.6032000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 33.5107000000, -86.8821000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 33.5502000000, -86.6463000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 33.4757000000, -86.7962000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 34.6976000000, -86.5835000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 33.3609000000, -86.9974000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 30.5863000000, -88.1956000000, 0, 30.809091666666664, -87.97075833333334 ],
        [ 32.3371000000, -86.2521000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 33.5101000000, -86.8812000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 30.7054000000, -88.1364000000, 0, 30.809091666666664, -87.97075833333334 ],
        [ 33.5193000000, -86.8078000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 32.3399000000, -86.2159000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 33.4433000000, -86.8337000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 30.6910000000, -88.0708000000, 0, 30.809091666666664, -87.97075833333334 ],
        [ 32.3897000000, -87.0762000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 33.4929000000, -86.8279000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 32.3522000000, -86.3283000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 32.4509000000, -85.0069000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 30.6784000000, -88.1140000000, 0, 30.809091666666664, -87.97075833333334 ],
        [ 30.6414000000, -88.1467000000, 0, 30.809091666666664, -87.97075833333334 ],
        [ 30.6974000000, -88.1340000000, 0, 30.809091666666664, -87.97075833333334 ],
        [ 31.0332000000, -87.4066000000, 0, 30.809091666666664, -87.97075833333334 ],
        [ 33.5162000000, -86.7424000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 30.4112000000, -87.6005000000, 0, 30.809091666666664, -87.97075833333334 ],
        [ 34.0143000000, -86.0145000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 32.2934000000, -87.7977000000, 0, 30.809091666666664, -87.97075833333334 ],
        [ 34.0229000000, -85.9888000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 32.4208000000, -85.7154000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 30.6002000000, -87.9033000000, 0, 30.809091666666664, -87.97075833333334 ],
        [ 33.1740000000, -87.5276000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 33.3591000000, -86.7341000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 34.8046000000, -87.6629000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 33.7176000000, -85.8147000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 34.8470000000, -87.6587000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 34.5331000000, -86.9992000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 30.6966000000, -88.0533000000, 0, 30.809091666666664, -87.97075833333334 ],
        [ 32.2757000000, -86.6130000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 33.4987000000, -86.7879000000, 1, 33.496368965517235, -86.64008275862068 ],
        [ 34.6907000000, -86.5726000000, 1, 33.496368965517235, -86.64008275862068 ],
      ],
      count: 41,
    },
    {
      id: 'tableIdClusteringResults2',
      data: [
        [ 30.6746000000, 0, 30.809091666666664 ],
        [ 33.3549000000, 1, 33.496368965517235 ],
        [ 34.7346000000, 1, 33.496368965517235 ],
        [ 33.5107000000, 1, 33.496368965517235 ],
        [ 33.5502000000, 1, 33.496368965517235 ],
        [ 33.4757000000, 1, 33.496368965517235 ],
        [ 34.6976000000, 1, 33.496368965517235 ],
        [ 33.3609000000, 1, 33.496368965517235 ],
        [ 30.5863000000, 0, 30.809091666666664 ],
        [ 32.3371000000, 1, 33.496368965517235 ],
        [ 33.5101000000, 1, 33.496368965517235 ],
        [ 30.7054000000, 0, 30.809091666666664 ],
        [ 33.5193000000, 1, 33.496368965517235 ],
        [ 32.3399000000, 1, 33.496368965517235 ],
        [ 33.4433000000, 1, 33.496368965517235 ],
        [ 30.6910000000, 0, 30.809091666666664 ],
        [ 32.3897000000, 1, 33.496368965517235 ],
        [ 33.4929000000, 1, 33.496368965517235 ],
        [ 32.3522000000, 1, 33.496368965517235 ],
        [ 32.4509000000, 1, 33.496368965517235 ],
        [ 30.6784000000, 0, 30.809091666666664 ],
        [ 30.6414000000, 0, 30.809091666666664 ],
        [ 30.6974000000, 0, 30.809091666666664 ],
        [ 31.0332000000, 0, 30.809091666666664 ],
        [ 33.5162000000, 1, 33.496368965517235 ],
        [ 30.4112000000, 0, 30.809091666666664 ],
        [ 34.0143000000, 1, 33.496368965517235 ],
        [ 32.2934000000, 0, 30.809091666666664 ],
        [ 34.0229000000, 1, 33.496368965517235 ],
        [ 32.4208000000, 1, 33.496368965517235 ],
        [ 30.6002000000, 0, 30.809091666666664 ],
        [ 33.1740000000, 1, 33.496368965517235 ],
        [ 33.3591000000, 1, 33.496368965517235 ],
        [ 34.8046000000, 1, 33.496368965517235 ],
        [ 33.7176000000, 1, 33.496368965517235 ],
        [ 34.8470000000, 1, 33.496368965517235 ],
        [ 34.5331000000, 1, 33.496368965517235 ],
        [ 30.6966000000, 0, 30.809091666666664 ],
        [ 32.2757000000, 1, 33.496368965517235 ],
        [ 33.4987000000, 1, 33.496368965517235 ],
        [ 34.6907000000, 1, 33.496368965517235 ],
      ],
      count: 41,
    },
    {
      id: 'datasetId101',
      data: [
        [ 1, 'John101', 'Doe' ],
        [ 2, 'Jane101', 'Doe' ],
        [ 3, 'Tom101', 'Dowie' ],
        [ 4, 'Tammy101', 'Dowie' ],
        [ 5, 'Peter101', 'Dole' ],
        [ 6, 'Panny101', 'Dole' ],
        [ 7, 'Koshi', 'Moshi' ],
        [ 8, 'Ushi', 'Sushi' ],
        [ 9, 'Aki', 'Taki' ],
        [ 10, 'Ore', 'More' ],
        [ 11, 'Ere', 'Dere' ],
        [ 12, 'Kelly', 'Hie' ],
        [ 13, 'Holli', 'Dole' ],
        [ 14, 'Iren', 'Dole' ],
        [ 15, 'Soup', 'Dole' ],
        [ 16, 'Jar', 'Dole' ],
      ],
      count: 16,
    },
    {
      id: 'datasetId111',
      data: [
        [ 1, 'Egor', 'FE', 5, 5 ],
        [ 2, 'Andrey', 'FE', -10, -13 ],
        [ 3, 'Daniel', 'PT', -21, 2 ],
        [ 4, 'Alexander', 'BE', -32, 4 ],
        [ 5, 'Evgeniy', 'SAMBA', -8, -3 ],
        [ 6, 'Abheek', 'PT', 4, 53 ],
        [ 1, 'Alberto', 'BE', -3, 1 ],
        [ 1, 'Leo', 'BE', 10, 5 ],
        [ 1, 'Dmitry', 'SAMBA', 14, 56 ],
      ],
      count: 6,
    },
    {
      id: 'datasetId112',
      data: [
        [ 1, 'John112', 'Doe' ],
        [ 2, 'Jane112', 'Doe' ],
        [ 3, 'Tom112', 'Dowie' ],
        [ 4, 'Tammy112', 'Dowie' ],
        [ 5, 'Peter112', 'Dole' ],
        [ 6, 'Panny112', 'Dole' ],
      ],
      count: 6,
    },
    {
      id: 'datasetId121',
      data: [
        [ 1, 'John121', 'Doe' ],
        [ 2, 'Jane121', 'Doe' ],
        [ 3, 'Tom121', 'Dowie' ],
        [ 4, 'Tammy121', 'Dowie' ],
        [ 5, 'Peter121', 'Dole' ],
        [ 6, 'Panny121', 'Dole' ],
      ],
      count: 6,
    },
    {
      id: 'datasetId131',
      data: [
        [ 1, 'John131', 'Doe' ],
        [ 2, 'Jane131', 'Doe' ],
        [ 3, 'Tom131', 'Dowie' ],
        [ 4, 'Tammy131', 'Dowie' ],
        [ 5, 'Peter131', 'Dole' ],
        [ 6, 'Panny131', 'Dole' ],
      ],
      count: 6,
    },
    {
      id: 'datasetId141',
      data: [
        [ 1, 'John131', 'Doe' ],
        [ 2, 'Jane131', 'Doe' ],
        [ 3, 'Tom131', 'Dowie' ],
        [ 4, 'Tammy131', 'Dowie' ],
        [ 5, 'Peter131', 'Dole' ],
        [ 6, 'Panny131', 'Dole' ],
      ],
      count: 6,
    },
    {
      id: 'datasetId211',
      data: [
        [ '1', 'John131', 'Doe' ],
        [ '2', 'Jane131', 'Doe' ],
        [ '3', 'Tom131', 'Dowie' ],
        [ '4', 'Tammy131', 'Dowie' ],
        [ '5', 'Peter131', 'Dole' ],
        [ '6', 'Panny131', 'Dole' ],
      ],
      count: 6,
    },
    {
      id: 'datasetId301',
      data: [
        [ 1, 'John131', 'Doe' ],
        [ 2, 'Jane131', 'Doe' ],
        [ 3, 'Tom131', 'Dowie' ],
        [ 4, 'Tammy131', 'Dowie' ],
        [ 5, 'Peter131', 'Dole' ],
        [ 6, 'Panny131', 'Dole' ],
      ],
      count: 6,
    },
    {
      id: 'datasetId311',
      data: [
        [ 1, 'John131', 'Doe' ],
        [ 2, 'Jane131', 'Doe' ],
        [ 3, 'Tom131', 'Dowie' ],
        [ 4, 'Tammy131', 'Dowie' ],
        [ 5, 'Peter131', 'Dole' ],
        [ 6, 'Panny131', 'Dole' ],
      ],
      count: 6,
    },
    {
      id: '20161118_first_gbm_input',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/20161118_first_gbm_input.csv'),
      data: [],
      count: 0,
    },
    {
      id: '20161118_first_gbm_output',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/20161118_first_gbm_output.csv'),
      data: [],
      count: 0,
    },
    {
      id: '20161118_first_gbm_step1',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/20161118_first_gbm_step1.csv'),
      data: [],
      count: 0,
    },
    {
      id: '20161118_first_gbm_step2',
      data: [
        [ 1, 0.9994674, 0.9071985, 0.9378577, 0.9072096, 1.1588111],
      ],
      count: 1,
    },

    // AquiredCustAnalysis
    {
      id: 'transactions_000',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/transactions_000.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'transac_agg_qty',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/transac_agg_qty.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'trasac_agg_amt',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/trasac_agg_amt.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'transac_purch_freq',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/transac_purch_freq.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'transac_agg_qty_amt',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/transac_agg_qty_amt.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'transac_agg_qty_amt_freq',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/transac_agg_qty_amt_freq.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'trainhistory_offer_1',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/trainhistory_offer_1.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'cdr_by_zip_code_data_updated',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/cdr_by_zip_code_data_updated.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'demographics',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/demographics.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'training_wdemo',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/training_wdemo.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'training_data_wcdr',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/training_data_wcdr.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'training_data_for_model',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/training_data_for_model.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'training_matrix_for_model_2',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/training_matrix_for_model_2.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'model_9_out',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/model_9_out.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'model_9_predicted',
      csvPath: require('file-loader?name=assets/fixtures/[name].[hash].csv!./datasets/model_9_predicted.csv'),
      data: [],
      count: 0,
    },
    {
      id: 'boston_prices_new',
      csvPath: 'https://s3.amazonaws.com/dev.studio9.ai/demo-data/boston_prices_new.csv',
      data: [],
      count: 0,
    },
    {
      id: 'AIRTF_all_data_cleaned2_',
      csvPath: 'https://s3.amazonaws.com/dev.studio9.ai/demo-data/AIRTF_all_data_cleaned2_100000.csv',
      data: [],
      count: 0,
    },
    {
      id: 'abbv_ticker',
      csvPath: 'https://s3.amazonaws.com/dev.studio9.ai/demo-data/abbv_ticker.csv',
      data: [],
      count: 0,
    },
  ],
  options: {
    indices: ['id'],
  },
};
