// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GetBlossomBriefInfoListRsp.proto" (syntax proto3)
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
import { BlossomBriefInfo } from "./BlossomBriefInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 2730;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message GetBlossomBriefInfoListRsp
 */
export interface GetBlossomBriefInfoListRsp {
    /**
     * @generated from protobuf field: int32 retcode = 14;
     */
    retcode: number;
    /**
     * @generated from protobuf field: repeated BlossomBriefInfo brief_info_list = 1;
     */
    briefInfoList: BlossomBriefInfo[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GetBlossomBriefInfoListRsp$Type extends MessageType<GetBlossomBriefInfoListRsp> {
    constructor() {
        super("GetBlossomBriefInfoListRsp", [
            { no: 14, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "brief_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BlossomBriefInfo }
        ]);
    }
    create(value?: PartialMessage<GetBlossomBriefInfoListRsp>): GetBlossomBriefInfoListRsp {
        const message = { retcode: 0, briefInfoList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetBlossomBriefInfoListRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBlossomBriefInfoListRsp): GetBlossomBriefInfoListRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 14:
                    message.retcode = reader.int32();
                    break;
                case /* repeated BlossomBriefInfo brief_info_list */ 1:
                    message.briefInfoList.push(BlossomBriefInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GetBlossomBriefInfoListRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 14; */
        if (message.retcode !== 0)
            writer.tag(14, WireType.Varint).int32(message.retcode);
        /* repeated BlossomBriefInfo brief_info_list = 1; */
        for (let i = 0; i < message.briefInfoList.length; i++)
            BlossomBriefInfo.internalBinaryWrite(message.briefInfoList[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetBlossomBriefInfoListRsp
 */
export const GetBlossomBriefInfoListRsp = new GetBlossomBriefInfoListRsp$Type();
