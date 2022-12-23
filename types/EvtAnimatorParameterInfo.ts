// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "EvtAnimatorParameterInfo.proto" (syntax proto3)
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
import { AnimatorParameterValueInfo } from "./AnimatorParameterValueInfo";
/**
 * @generated from protobuf message EvtAnimatorParameterInfo
 */
export interface EvtAnimatorParameterInfo {
    /**
     * @generated from protobuf field: int32 name_id = 10;
     */
    nameId: number;
    /**
     * @generated from protobuf field: AnimatorParameterValueInfo value = 7;
     */
    value?: AnimatorParameterValueInfo;
    /**
     * @generated from protobuf field: uint32 entity_id = 14;
     */
    entityId: number;
    /**
     * @generated from protobuf field: bool is_server_cache = 9;
     */
    isServerCache: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class EvtAnimatorParameterInfo$Type extends MessageType<EvtAnimatorParameterInfo> {
    constructor() {
        super("EvtAnimatorParameterInfo", [
            { no: 10, name: "name_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "value", kind: "message", T: () => AnimatorParameterValueInfo },
            { no: 14, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_server_cache", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<EvtAnimatorParameterInfo>): EvtAnimatorParameterInfo {
        const message = { nameId: 0, entityId: 0, isServerCache: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EvtAnimatorParameterInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EvtAnimatorParameterInfo): EvtAnimatorParameterInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 name_id */ 10:
                    message.nameId = reader.int32();
                    break;
                case /* AnimatorParameterValueInfo value */ 7:
                    message.value = AnimatorParameterValueInfo.internalBinaryRead(reader, reader.uint32(), options, message.value);
                    break;
                case /* uint32 entity_id */ 14:
                    message.entityId = reader.uint32();
                    break;
                case /* bool is_server_cache */ 9:
                    message.isServerCache = reader.bool();
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
    internalBinaryWrite(message: EvtAnimatorParameterInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 name_id = 10; */
        if (message.nameId !== 0)
            writer.tag(10, WireType.Varint).int32(message.nameId);
        /* AnimatorParameterValueInfo value = 7; */
        if (message.value)
            AnimatorParameterValueInfo.internalBinaryWrite(message.value, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 14; */
        if (message.entityId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.entityId);
        /* bool is_server_cache = 9; */
        if (message.isServerCache !== false)
            writer.tag(9, WireType.Varint).bool(message.isServerCache);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtAnimatorParameterInfo
 */
export const EvtAnimatorParameterInfo = new EvtAnimatorParameterInfo$Type();
