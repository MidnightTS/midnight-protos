// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ExpeditionStartRsp.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 2182;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ExpeditionStartRsp
 */
export interface ExpeditionStartRsp {
    /**
     * @generated from protobuf field: uint32 Unk3300_AIEJKADFLKG = 5 [json_name = "Unk3300AIEJKADFLKG"];
     */
    unk3300AIEJKADFLKG: number;
    /**
     * @generated from protobuf field: uint32 path_id = 3;
     */
    pathId: number;
    /**
     * @generated from protobuf field: int32 retcode = 6;
     */
    retcode: number;
    /**
     * @generated from protobuf field: repeated uint32 avatar_id_list = 4;
     */
    avatarIdList: number[];
    /**
     * @generated from protobuf field: uint32 Unk3300_AFGPGIIGAKA = 10 [json_name = "Unk3300AFGPGIIGAKA"];
     */
    unk3300AFGPGIIGAKA: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ExpeditionStartRsp$Type extends MessageType<ExpeditionStartRsp> {
    constructor() {
        super("ExpeditionStartRsp", [
            { no: 5, name: "Unk3300_AIEJKADFLKG", kind: "scalar", jsonName: "Unk3300AIEJKADFLKG", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "path_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "avatar_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_AFGPGIIGAKA", kind: "scalar", jsonName: "Unk3300AFGPGIIGAKA", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ExpeditionStartRsp>): ExpeditionStartRsp {
        const message = { unk3300AIEJKADFLKG: 0, pathId: 0, retcode: 0, avatarIdList: [], unk3300AFGPGIIGAKA: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExpeditionStartRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExpeditionStartRsp): ExpeditionStartRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_AIEJKADFLKG = 5 [json_name = "Unk3300AIEJKADFLKG"];*/ 5:
                    message.unk3300AIEJKADFLKG = reader.uint32();
                    break;
                case /* uint32 path_id */ 3:
                    message.pathId = reader.uint32();
                    break;
                case /* int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 avatar_id_list */ 4:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.avatarIdList.push(reader.uint32());
                    else
                        message.avatarIdList.push(reader.uint32());
                    break;
                case /* uint32 Unk3300_AFGPGIIGAKA = 10 [json_name = "Unk3300AFGPGIIGAKA"];*/ 10:
                    message.unk3300AFGPGIIGAKA = reader.uint32();
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
    internalBinaryWrite(message: ExpeditionStartRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_AIEJKADFLKG = 5 [json_name = "Unk3300AIEJKADFLKG"]; */
        if (message.unk3300AIEJKADFLKG !== 0)
            writer.tag(5, WireType.Varint).uint32(message.unk3300AIEJKADFLKG);
        /* uint32 path_id = 3; */
        if (message.pathId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.pathId);
        /* int32 retcode = 6; */
        if (message.retcode !== 0)
            writer.tag(6, WireType.Varint).int32(message.retcode);
        /* repeated uint32 avatar_id_list = 4; */
        if (message.avatarIdList.length) {
            writer.tag(4, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.avatarIdList.length; i++)
                writer.uint32(message.avatarIdList[i]);
            writer.join();
        }
        /* uint32 Unk3300_AFGPGIIGAKA = 10 [json_name = "Unk3300AFGPGIIGAKA"]; */
        if (message.unk3300AFGPGIIGAKA !== 0)
            writer.tag(10, WireType.Varint).uint32(message.unk3300AFGPGIIGAKA);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ExpeditionStartRsp
 */
export const ExpeditionStartRsp = new ExpeditionStartRsp$Type();
