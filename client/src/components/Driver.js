import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';


function Driver() {

    let {id} = useParams();
  return (
    <div>hello</div>
  )
}

export default Driver