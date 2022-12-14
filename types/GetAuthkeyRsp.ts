// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GetAuthkeyRsp.proto" (syntax proto3)
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
 *   CMD_ID = 1478;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GetAuthkeyRsp
 */
export interface GetAuthkeyRsp {
    /**
     * @generated from protobuf field: int32 retcode = 8;
     */
    retcode: number;
    /**
     * @generated from protobuf field: string authkey = 6;
     */
    authkey: string;
    /**
     * @generated from protobuf field: uint32 authkey_ver = 13;
     */
    authkeyVer: number;
    /**
     * @generated from protobuf field: uint32 sign_type = 3;
     */
    signType: number;
    /**
     * @generated from protobuf field: string auth_appid = 7;
     */
    authAppid: string;
    /**
     * @generated from protobuf field: string game_biz = 1;
     */
    gameBiz: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class GetAuthkeyRsp$Type extends MessageType<GetAuthkeyRsp> {
    constructor() {
        super("GetAuthkeyRsp", [
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "authkey", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "authkey_ver", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "sign_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "auth_appid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "game_biz", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetAuthkeyRsp>): GetAuthkeyRsp {
        const message = { retcode: 0, authkey: "", authkeyVer: 0, signType: 0, authAppid: "", gameBiz: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetAuthkeyRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAuthkeyRsp): GetAuthkeyRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* string authkey */ 6:
                    message.authkey = reader.string();
                    break;
                case /* uint32 authkey_ver */ 13:
                    message.authkeyVer = reader.uint32();
                    break;
                case /* uint32 sign_type */ 3:
                    message.signType = reader.uint32();
                    break;
                case /* string auth_appid */ 7:
                    message.authAppid = reader.string();
                    break;
                case /* string game_biz */ 1:
                    message.gameBiz = reader.string();
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
    internalBinaryWrite(message: GetAuthkeyRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, WireType.Varint).int32(message.retcode);
        /* string authkey = 6; */
        if (message.authkey !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.authkey);
        /* uint32 authkey_ver = 13; */
        if (message.authkeyVer !== 0)
            writer.tag(13, WireType.Varint).uint32(message.authkeyVer);
        /* uint32 sign_type = 3; */
        if (message.signType !== 0)
            writer.tag(3, WireType.Varint).uint32(message.signType);
        /* string auth_appid = 7; */
        if (message.authAppid !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.authAppid);
        /* string game_biz = 1; */
        if (message.gameBiz !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.gameBiz);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetAuthkeyRsp
 */
export const GetAuthkeyRsp = new GetAuthkeyRsp$Type();
