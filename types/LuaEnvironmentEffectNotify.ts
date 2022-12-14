// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "LuaEnvironmentEffectNotify.proto" (syntax proto3)
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
 *   CMD_ID = 3083;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message LuaEnvironmentEffectNotify
 */
export interface LuaEnvironmentEffectNotify {
    /**
     * @generated from protobuf field: uint32 type = 8;
     */
    type: number;
    /**
     * @generated from protobuf field: repeated int32 int_param_list = 10;
     */
    intParamList: number[];
    /**
     * @generated from protobuf field: string effect_alias = 3;
     */
    effectAlias: string;
    /**
     * @generated from protobuf field: repeated float float_param_list = 12;
     */
    floatParamList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class LuaEnvironmentEffectNotify$Type extends MessageType<LuaEnvironmentEffectNotify> {
    constructor() {
        super("LuaEnvironmentEffectNotify", [
            { no: 8, name: "type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "int_param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "effect_alias", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "float_param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value?: PartialMessage<LuaEnvironmentEffectNotify>): LuaEnvironmentEffectNotify {
        const message = { type: 0, intParamList: [], effectAlias: "", floatParamList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LuaEnvironmentEffectNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LuaEnvironmentEffectNotify): LuaEnvironmentEffectNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 type */ 8:
                    message.type = reader.uint32();
                    break;
                case /* repeated int32 int_param_list */ 10:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.intParamList.push(reader.int32());
                    else
                        message.intParamList.push(reader.int32());
                    break;
                case /* string effect_alias */ 3:
                    message.effectAlias = reader.string();
                    break;
                case /* repeated float float_param_list */ 12:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.floatParamList.push(reader.float());
                    else
                        message.floatParamList.push(reader.float());
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
    internalBinaryWrite(message: LuaEnvironmentEffectNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 type = 8; */
        if (message.type !== 0)
            writer.tag(8, WireType.Varint).uint32(message.type);
        /* repeated int32 int_param_list = 10; */
        if (message.intParamList.length) {
            writer.tag(10, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.intParamList.length; i++)
                writer.int32(message.intParamList[i]);
            writer.join();
        }
        /* string effect_alias = 3; */
        if (message.effectAlias !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.effectAlias);
        /* repeated float float_param_list = 12; */
        if (message.floatParamList.length) {
            writer.tag(12, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.floatParamList.length; i++)
                writer.float(message.floatParamList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LuaEnvironmentEffectNotify
 */
export const LuaEnvironmentEffectNotify = new LuaEnvironmentEffectNotify$Type();
