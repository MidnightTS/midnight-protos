// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "HomeMarkPointFurnitureData.proto" (syntax proto3)
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
import { HomeMarkPointSuiteData } from "./HomeMarkPointSuiteData";
import { HomeMarkPointNPCData } from "./HomeMarkPointNPCData";
import { Vector } from "./Vector";
/**
 * @generated from protobuf message HomeMarkPointFurnitureData
 */
export interface HomeMarkPointFurnitureData {
    /**
     * @generated from protobuf field: uint32 guid = 1;
     */
    guid: number;
    /**
     * @generated from protobuf field: uint32 furniture_id = 2;
     */
    furnitureId: number;
    /**
     * @generated from protobuf field: uint32 furniture_type = 3;
     */
    furnitureType: number;
    /**
     * @generated from protobuf field: Vector pos = 4;
     */
    pos?: Vector;
    /**
     * @generated from protobuf oneof: extra
     */
    extra: {
        oneofKind: "npcData";
        /**
         * @generated from protobuf field: HomeMarkPointNPCData npc_data = 6;
         */
        npcData: HomeMarkPointNPCData;
    } | {
        oneofKind: "suiteData";
        /**
         * @generated from protobuf field: HomeMarkPointSuiteData suite_data = 7;
         */
        suiteData: HomeMarkPointSuiteData;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeMarkPointFurnitureData$Type extends MessageType<HomeMarkPointFurnitureData> {
    constructor() {
        super("HomeMarkPointFurnitureData", [
            { no: 1, name: "guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "furniture_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "furniture_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "pos", kind: "message", T: () => Vector },
            { no: 6, name: "npc_data", kind: "message", oneof: "extra", T: () => HomeMarkPointNPCData },
            { no: 7, name: "suite_data", kind: "message", oneof: "extra", T: () => HomeMarkPointSuiteData }
        ]);
    }
    create(value?: PartialMessage<HomeMarkPointFurnitureData>): HomeMarkPointFurnitureData {
        const message = { guid: 0, furnitureId: 0, furnitureType: 0, extra: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeMarkPointFurnitureData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeMarkPointFurnitureData): HomeMarkPointFurnitureData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 guid */ 1:
                    message.guid = reader.uint32();
                    break;
                case /* uint32 furniture_id */ 2:
                    message.furnitureId = reader.uint32();
                    break;
                case /* uint32 furniture_type */ 3:
                    message.furnitureType = reader.uint32();
                    break;
                case /* Vector pos */ 4:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* HomeMarkPointNPCData npc_data */ 6:
                    message.extra = {
                        oneofKind: "npcData",
                        npcData: HomeMarkPointNPCData.internalBinaryRead(reader, reader.uint32(), options, (message.extra as any).npcData)
                    };
                    break;
                case /* HomeMarkPointSuiteData suite_data */ 7:
                    message.extra = {
                        oneofKind: "suiteData",
                        suiteData: HomeMarkPointSuiteData.internalBinaryRead(reader, reader.uint32(), options, (message.extra as any).suiteData)
                    };
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
    internalBinaryWrite(message: HomeMarkPointFurnitureData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 guid = 1; */
        if (message.guid !== 0)
            writer.tag(1, WireType.Varint).uint32(message.guid);
        /* uint32 furniture_id = 2; */
        if (message.furnitureId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.furnitureId);
        /* uint32 furniture_type = 3; */
        if (message.furnitureType !== 0)
            writer.tag(3, WireType.Varint).uint32(message.furnitureType);
        /* Vector pos = 4; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* HomeMarkPointNPCData npc_data = 6; */
        if (message.extra.oneofKind === "npcData")
            HomeMarkPointNPCData.internalBinaryWrite(message.extra.npcData, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* HomeMarkPointSuiteData suite_data = 7; */
        if (message.extra.oneofKind === "suiteData")
            HomeMarkPointSuiteData.internalBinaryWrite(message.extra.suiteData, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeMarkPointFurnitureData
 */
export const HomeMarkPointFurnitureData = new HomeMarkPointFurnitureData$Type();
