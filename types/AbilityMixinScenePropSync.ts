// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "AbilityMixinScenePropSync.proto" (syntax proto3)
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
import { MassivePropSyncInfo } from "./MassivePropSyncInfo";
/**
 * @generated from protobuf message AbilityMixinScenePropSync
 */
export interface AbilityMixinScenePropSync {
    /**
     * @generated from protobuf field: repeated MassivePropSyncInfo massive_prop_list = 11;
     */
    massivePropList: MassivePropSyncInfo[];
    /**
     * @generated from protobuf field: repeated int64 delete_id_list = 12;
     */
    deleteIdList: bigint[];
    /**
     * @generated from protobuf field: bool is_clear_all = 3;
     */
    isClearAll: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinScenePropSync$Type extends MessageType<AbilityMixinScenePropSync> {
    constructor() {
        super("AbilityMixinScenePropSync", [
            { no: 11, name: "massive_prop_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MassivePropSyncInfo },
            { no: 12, name: "delete_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "is_clear_all", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<AbilityMixinScenePropSync>): AbilityMixinScenePropSync {
        const message = { massivePropList: [], deleteIdList: [], isClearAll: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AbilityMixinScenePropSync>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AbilityMixinScenePropSync): AbilityMixinScenePropSync {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated MassivePropSyncInfo massive_prop_list */ 11:
                    message.massivePropList.push(MassivePropSyncInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated int64 delete_id_list */ 12:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.deleteIdList.push(reader.int64().toBigInt());
                    else
                        message.deleteIdList.push(reader.int64().toBigInt());
                    break;
                case /* bool is_clear_all */ 3:
                    message.isClearAll = reader.bool();
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
    internalBinaryWrite(message: AbilityMixinScenePropSync, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated MassivePropSyncInfo massive_prop_list = 11; */
        for (let i = 0; i < message.massivePropList.length; i++)
            MassivePropSyncInfo.internalBinaryWrite(message.massivePropList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* repeated int64 delete_id_list = 12; */
        if (message.deleteIdList.length) {
            writer.tag(12, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.deleteIdList.length; i++)
                writer.int64(message.deleteIdList[i]);
            writer.join();
        }
        /* bool is_clear_all = 3; */
        if (message.isClearAll !== false)
            writer.tag(3, WireType.Varint).bool(message.isClearAll);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinScenePropSync
 */
export const AbilityMixinScenePropSync = new AbilityMixinScenePropSync$Type();
