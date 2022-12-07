// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GmTalkRsp.proto" (syntax proto3)
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
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 56;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GmTalkRsp
 */
export interface GmTalkRsp {
    /**
     * @generated from protobuf field: string retmsg = 11;
     */
    retmsg: string;
    /**
     * @generated from protobuf field: int32 retcode = 4;
     */
    retcode: number;
    /**
     * @generated from protobuf field: string msg = 9;
     */
    msg: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class GmTalkRsp$Type extends MessageType<GmTalkRsp> {
    constructor() {
        super("GmTalkRsp", [
            { no: 11, name: "retmsg", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "msg", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GmTalkRsp>): GmTalkRsp {
        const message = { retmsg: "", retcode: 0, msg: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GmTalkRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GmTalkRsp): GmTalkRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string retmsg */ 11:
                    message.retmsg = reader.string();
                    break;
                case /* int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* string msg */ 9:
                    message.msg = reader.string();
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
    internalBinaryWrite(message: GmTalkRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string retmsg = 11; */
        if (message.retmsg !== "")
            writer.tag(11, WireType.LengthDelimited).string(message.retmsg);
        /* int32 retcode = 4; */
        if (message.retcode !== 0)
            writer.tag(4, WireType.Varint).int32(message.retcode);
        /* string msg = 9; */
        if (message.msg !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.msg);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GmTalkRsp
 */
export const GmTalkRsp = new GmTalkRsp$Type();