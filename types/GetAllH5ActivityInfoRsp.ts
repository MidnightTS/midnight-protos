// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GetAllH5ActivityInfoRsp.proto" (syntax proto3)
// tslint:disable
//
// Sorapointa - A server software re-implementation for a certain anime game, and avoid sorapointa.
// Copyright (C) 2022  Sorapointa Team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { H5ActivityInfo } from "./H5ActivityInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 5692;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GetAllH5ActivityInfoRsp
 */
export interface GetAllH5ActivityInfoRsp {
    /**
     * @generated from protobuf field: uint32 client_red_dot_timestamp = 3;
     */
    clientRedDotTimestamp: number;
    /**
     * @generated from protobuf field: repeated H5ActivityInfo h5_activity_info_list = 5;
     */
    h5ActivityInfoList: H5ActivityInfo[];
    /**
     * @generated from protobuf field: int32 retcode = 14;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GetAllH5ActivityInfoRsp$Type extends MessageType<GetAllH5ActivityInfoRsp> {
    constructor() {
        super("GetAllH5ActivityInfoRsp", [
            { no: 3, name: "client_red_dot_timestamp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "h5_activity_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => H5ActivityInfo },
            { no: 14, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<GetAllH5ActivityInfoRsp>): GetAllH5ActivityInfoRsp {
        const message = { clientRedDotTimestamp: 0, h5ActivityInfoList: [], retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetAllH5ActivityInfoRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAllH5ActivityInfoRsp): GetAllH5ActivityInfoRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 client_red_dot_timestamp */ 3:
                    message.clientRedDotTimestamp = reader.uint32();
                    break;
                case /* repeated H5ActivityInfo h5_activity_info_list */ 5:
                    message.h5ActivityInfoList.push(H5ActivityInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 14:
                    message.retcode = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetAllH5ActivityInfoRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 client_red_dot_timestamp = 3; */
        if (message.clientRedDotTimestamp !== 0)
            writer.tag(3, WireType.Varint).uint32(message.clientRedDotTimestamp);
        /* repeated H5ActivityInfo h5_activity_info_list = 5; */
        for (let i = 0; i < message.h5ActivityInfoList.length; i++)
            H5ActivityInfo.internalBinaryWrite(message.h5ActivityInfoList[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 14; */
        if (message.retcode !== 0)
            writer.tag(14, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetAllH5ActivityInfoRsp
 */
export const GetAllH5ActivityInfoRsp = new GetAllH5ActivityInfoRsp$Type();
