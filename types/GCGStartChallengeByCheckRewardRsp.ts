// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GCGStartChallengeByCheckRewardRsp.proto" (syntax proto3)
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
import { GCGLevelType } from "./GCGLevelType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 7727;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GCGStartChallengeByCheckRewardRsp
 */
export interface GCGStartChallengeByCheckRewardRsp {
    /**
     * @generated from protobuf field: repeated uint32 exceeded_item_type_list = 3;
     */
    exceededItemTypeList: number[];
    /**
     * @generated from protobuf field: uint32 level_id = 5;
     */
    levelId: number;
    /**
     * @generated from protobuf field: repeated uint32 exceeded_item_list = 8;
     */
    exceededItemList: number[];
    /**
     * @generated from protobuf field: GCGLevelType level_type = 2;
     */
    levelType: GCGLevelType;
    /**
     * @generated from protobuf field: uint32 config_id = 9;
     */
    configId: number;
    /**
     * @generated from protobuf field: int32 retcode = 12;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGStartChallengeByCheckRewardRsp$Type extends MessageType<GCGStartChallengeByCheckRewardRsp> {
    constructor() {
        super("GCGStartChallengeByCheckRewardRsp", [
            { no: 3, name: "exceeded_item_type_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "exceeded_item_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "level_type", kind: "enum", T: () => ["GCGLevelType", GCGLevelType] },
            { no: 9, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<GCGStartChallengeByCheckRewardRsp>): GCGStartChallengeByCheckRewardRsp {
        const message = { exceededItemTypeList: [], levelId: 0, exceededItemList: [], levelType: 0, configId: 0, retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGStartChallengeByCheckRewardRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGStartChallengeByCheckRewardRsp): GCGStartChallengeByCheckRewardRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 exceeded_item_type_list */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exceededItemTypeList.push(reader.uint32());
                    else
                        message.exceededItemTypeList.push(reader.uint32());
                    break;
                case /* uint32 level_id */ 5:
                    message.levelId = reader.uint32();
                    break;
                case /* repeated uint32 exceeded_item_list */ 8:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exceededItemList.push(reader.uint32());
                    else
                        message.exceededItemList.push(reader.uint32());
                    break;
                case /* GCGLevelType level_type */ 2:
                    message.levelType = reader.int32();
                    break;
                case /* uint32 config_id */ 9:
                    message.configId = reader.uint32();
                    break;
                case /* int32 retcode */ 12:
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
    internalBinaryWrite(message: GCGStartChallengeByCheckRewardRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 exceeded_item_type_list = 3; */
        if (message.exceededItemTypeList.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.exceededItemTypeList.length; i++)
                writer.uint32(message.exceededItemTypeList[i]);
            writer.join();
        }
        /* uint32 level_id = 5; */
        if (message.levelId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.levelId);
        /* repeated uint32 exceeded_item_list = 8; */
        if (message.exceededItemList.length) {
            writer.tag(8, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.exceededItemList.length; i++)
                writer.uint32(message.exceededItemList[i]);
            writer.join();
        }
        /* GCGLevelType level_type = 2; */
        if (message.levelType !== 0)
            writer.tag(2, WireType.Varint).int32(message.levelType);
        /* uint32 config_id = 9; */
        if (message.configId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.configId);
        /* int32 retcode = 12; */
        if (message.retcode !== 0)
            writer.tag(12, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGStartChallengeByCheckRewardRsp
 */
export const GCGStartChallengeByCheckRewardRsp = new GCGStartChallengeByCheckRewardRsp$Type();
