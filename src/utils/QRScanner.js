/*Bocsi volt itt egy error de majd kitorlom a kommentet */



/* import React, { useState } from 'react';
import {QrReader, useQrReader} from 'react-qr-reader';

import styles from './QRScanner.css';

const QRScanner = () => {

	const [result, setResult] = useState('No result');

	const handleError = (err) => {
		console.log(err)
	}

	const handleScan = (result) => {
		if(result){
			setResult(result)
		}
	}

	const previewStyle = {
		height: 240,
		width: 320,
	}

	return (
		<div className={styles.container}>
			<QrReader
			delay={500}
			style={previewStyle}
			onError={handleError}
			onScan={handleScan}
			onResult={(result, error) => {
				//console.log(result);
				//console.log(error);
				if (result) {
					setResult(result);
				}
				if (error) {
					handleError(error);
				}
			  }}
			/>
			<div className={styles.result}>{result}</div>		
		</div>
	);
}

export default QRScanner; */