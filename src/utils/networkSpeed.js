import NetworkSpeed from 'network-speed';
import CustomError from './customError.js';

const testNetworkSpeed = new NetworkSpeed();

const getNetworkDownloadSpeed = async () => {
  const baseUrl = 'http://eu.httpbin.org/stream-bytes/50000000';
  const fileSizeInBytes = 50000000; 

  try {
    const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
    console.log(`Download speed: ${speed.mbps} Mbps`); 
    return speed;
  } catch (error) {
    console.error('Error occurred:', error);
    throw new CustomError(`Something went wrong while checking download speed ${error}`, 400);
  }
};

const getNetworkUploadSpeed = async () => {
  const options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/catchers/544b09b4599c1d0200000289',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const fileSizeInBytes = 2000000;
  try {
    const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
    console.log(`Upload speed: ${speed.mbps} Mbps`);
    return speed;
  } catch (error) {
    console.error('Error occurred:', error);
    throw new CustomError(`Something went wrong while checking upload speed ${error}`, 400);
  }
}

export { getNetworkDownloadSpeed, getNetworkUploadSpeed };
