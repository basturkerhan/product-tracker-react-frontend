import React from 'react'
import verifyStatusEnum from "../../../enums/verifyStatus";
import {AiOutlineWarning, AiOutlineCheck, AiOutlineClose} from "react-icons/ai";
import { convertBigNumberToNumber } from "../../../helpers/converter";
import moment from "moment";
import {Link, useNavigate} from "react-router-dom";

export const TrackerItem = ({item}) => {
    const navigate = useNavigate();

    const navigateTo = (id) => {
        navigate(`/product/${id}`);
    }

  return (
    <tr style={{cursor:"pointer"}} onClick={() => navigateTo(convertBigNumberToNumber(item.verifySubProductId))}>
          <td>
          {
                item.status===verifyStatusEnum.Waiting ? <AiOutlineWarning style={{fill:"orange"}} />
                : item.status===verifyStatusEnum.Verified ? <AiOutlineCheck style={{fill:"green"}} />
                : <AiOutlineClose style={{fill:"red"}} />
            }
          </td>
          <td>
            {convertBigNumberToNumber(item.verifySubProductId)}
          </td>
          <td>{item.subProductName}</td>
          <td>{moment.unix(convertBigNumberToNumber(item.date)).toString()}</td>
          <td>
          {
                item.status===verifyStatusEnum.Waiting ? <p>waiting</p>
                : item.status===verifyStatusEnum.Verified ? <p>verified</p>
                : <p>rejected</p>
            }
          </td>
        </tr>
  )
}
