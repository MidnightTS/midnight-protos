// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "HomePlantSubFieldData.proto" (syntax proto3)
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
import { HomePlantFieldStatus } from "./HomePlantFieldStatus";
/**
 * @generated from protobuf message HomePlantSubFieldData
 */
export interface HomePlantSubFieldData {
    /**
     * @generated from protobuf field: HomePlantFieldStatus field_status = 5;
     */
    fieldStatus: HomePlantFieldStatus;
    /**
     * @generated from protobuf field: uint32 home_gather_id = 7;
     */
    homeGatherId: number;
    /**
     * @generated from protobuf field: repeated uint32 entity_id_list = 12;
     */
    entityIdList: number[];
    /**
     * @generated from protobuf field: fixed32 end_time = 6;
     */
    endTime: number;
    /**
     * @generated from protobuf field: uint32 seed_id = 9;
     */
    seedId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class HomePlantSubFieldData$Type extends MessageType<HomePlantSubFieldData> {
    constructor() {
        super("HomePlantSubFieldData", [
            { no: 5, name: "field_status", kind: "enum", T: () => ["HomePlantFieldStatus", HomePlantFieldStatus, "HOME_PLANT_FIELD_STATUS_"] },
            { no: 7, name: "home_gather_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "entity_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "end_time", kind: "scalar", T: 7 /*ScalarType.FIXED32*/ },
            { no: 9, name: "seed_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<HomePlantSubFieldData>): HomePlantSubFieldData {
        const message = { fieldStatus: 0, homeGatherId: 0, entityIdList: [], endTime: 0, seedId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomePlantSubFieldData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomePlantSubFieldData): HomePlantSubFieldData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* HomePlantFieldStatus field_status */ 5:
                    message.fieldStatus = reader.int32();
                    break;
                case /* uint32 home_gather_id */ 7:
                    message.homeGatherId = reader.uint32();
                    break;
                case /* repeated uint32 entity_id_list */ 12:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.entityIdList.push(reader.uint32());
                    else
                        message.entityIdList.push(reader.uint32());
                    break;
                case /* fixed32 end_time */ 6:
                    message.endTime = reader.fixed32();
                    break;
                case /* uint32 seed_id */ 9:
                    message.seedId = reader.uint32();
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
    internalBinaryWrite(message: HomePlantSubFieldData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* HomePlantFieldStatus field_status = 5; */
        if (message.fieldStatus !== 0)
            writer.tag(5, WireType.Varint).int32(message.fieldStatus);
        /* uint32 home_gather_id = 7; */
        if (message.homeGatherId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.homeGatherId);
        /* repeated uint32 entity_id_list = 12; */
        if (message.entityIdList.length) {
            writer.tag(12, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.entityIdList.length; i++)
                writer.uint32(message.entityIdList[i]);
            writer.join();
        }
        /* fixed32 end_time = 6; */
        if (message.endTime !== 0)
            writer.tag(6, WireType.Bit32).fixed32(message.endTime);
        /* uint32 seed_id = 9; */
        if (message.seedId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.seedId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomePlantSubFieldData
 */
export const HomePlantSubFieldData = new HomePlantSubFieldData$Type();
