// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ToTheMoonQueryPathReq.proto" (syntax proto3)
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
import { Vector } from "./Vector";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 6179;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message ToTheMoonQueryPathReq
 */
export interface ToTheMoonQueryPathReq {
    /**
     * @generated from protobuf field: ToTheMoonQueryPathReq.OptionType query_type = 5;
     */
    queryType: ToTheMoonQueryPathReq_OptionType;
    /**
     * @generated from protobuf field: bool Unk3300_BBLMBILIOGP = 8 [json_name = "Unk3300BBLMBILIOGP"];
     */
    unk3300BBLMBILIOGP: boolean;
    /**
     * @generated from protobuf field: ToTheMoonQueryPathReq.FilterType filter_type = 13;
     */
    filterType: ToTheMoonQueryPathReq_FilterType;
    /**
     * @generated from protobuf field: int32 query_id = 2;
     */
    queryId: number;
    /**
     * @generated from protobuf field: ToTheMoonQueryPathReq.AStarMethod astar_method = 12;
     */
    astarMethod: ToTheMoonQueryPathReq_AStarMethod;
    /**
     * @generated from protobuf field: Vector source_pos = 11;
     */
    sourcePos?: Vector;
    /**
     * @generated from protobuf field: Vector destination_pos = 3;
     */
    destinationPos?: Vector;
    /**
     * @generated from protobuf field: int32 fuzzy_range = 7;
     */
    fuzzyRange: number;
    /**
     * @generated from protobuf field: bool Unk3300_OFGONAMNIJG = 6 [json_name = "Unk3300OFGONAMNIJG"];
     */
    unk3300OFGONAMNIJG: boolean;
    /**
     * @generated from protobuf field: uint32 scene_id = 4;
     */
    sceneId: number;
}
/**
 * @generated from protobuf enum ToTheMoonQueryPathReq.OptionType
 */
export enum ToTheMoonQueryPathReq_OptionType {
    /**
     * @generated from protobuf enum value: OPTION_TYPE_NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: OPTION_TYPE_NORMAL = 1;
     */
    NORMAL = 1
}
/**
 * @generated from protobuf enum ToTheMoonQueryPathReq.AStarMethod
 */
export enum ToTheMoonQueryPathReq_AStarMethod {
    /**
     * @generated from protobuf enum value: A_STAR_METHOD_CLASSIC = 0;
     */
    CLASSIC = 0,
    /**
     * @generated from protobuf enum value: A_STAR_METHOD_TENDENCY = 1;
     */
    TENDENCY = 1,
    /**
     * @generated from protobuf enum value: A_STAR_METHOD_ADAPTIVE = 2;
     */
    ADAPTIVE = 2,
    /**
     * @generated from protobuf enum value: A_STAR_METHOD_INFLECTION = 3;
     */
    INFLECTION = 3
}
/**
 * @generated from protobuf enum ToTheMoonQueryPathReq.FilterType
 */
export enum ToTheMoonQueryPathReq_FilterType {
    /**
     * @generated from protobuf enum value: FILTER_TYPE_ALL = 0;
     */
    ALL = 0,
    /**
     * @generated from protobuf enum value: FILTER_TYPE_AIR = 1;
     */
    AIR = 1,
    /**
     * @generated from protobuf enum value: FILTER_TYPE_WATER = 2;
     */
    WATER = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonQueryPathReq$Type extends MessageType<ToTheMoonQueryPathReq> {
    constructor() {
        super("ToTheMoonQueryPathReq", [
            { no: 5, name: "query_type", kind: "enum", T: () => ["ToTheMoonQueryPathReq.OptionType", ToTheMoonQueryPathReq_OptionType, "OPTION_TYPE_"] },
            { no: 8, name: "Unk3300_BBLMBILIOGP", kind: "scalar", jsonName: "Unk3300BBLMBILIOGP", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "filter_type", kind: "enum", T: () => ["ToTheMoonQueryPathReq.FilterType", ToTheMoonQueryPathReq_FilterType, "FILTER_TYPE_"] },
            { no: 2, name: "query_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "astar_method", kind: "enum", T: () => ["ToTheMoonQueryPathReq.AStarMethod", ToTheMoonQueryPathReq_AStarMethod, "A_STAR_METHOD_"] },
            { no: 11, name: "source_pos", kind: "message", T: () => Vector },
            { no: 3, name: "destination_pos", kind: "message", T: () => Vector },
            { no: 7, name: "fuzzy_range", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "Unk3300_OFGONAMNIJG", kind: "scalar", jsonName: "Unk3300OFGONAMNIJG", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ToTheMoonQueryPathReq>): ToTheMoonQueryPathReq {
        const message = { queryType: 0, unk3300BBLMBILIOGP: false, filterType: 0, queryId: 0, astarMethod: 0, fuzzyRange: 0, unk3300OFGONAMNIJG: false, sceneId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ToTheMoonQueryPathReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ToTheMoonQueryPathReq): ToTheMoonQueryPathReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ToTheMoonQueryPathReq.OptionType query_type */ 5:
                    message.queryType = reader.int32();
                    break;
                case /* bool Unk3300_BBLMBILIOGP = 8 [json_name = "Unk3300BBLMBILIOGP"];*/ 8:
                    message.unk3300BBLMBILIOGP = reader.bool();
                    break;
                case /* ToTheMoonQueryPathReq.FilterType filter_type */ 13:
                    message.filterType = reader.int32();
                    break;
                case /* int32 query_id */ 2:
                    message.queryId = reader.int32();
                    break;
                case /* ToTheMoonQueryPathReq.AStarMethod astar_method */ 12:
                    message.astarMethod = reader.int32();
                    break;
                case /* Vector source_pos */ 11:
                    message.sourcePos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.sourcePos);
                    break;
                case /* Vector destination_pos */ 3:
                    message.destinationPos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.destinationPos);
                    break;
                case /* int32 fuzzy_range */ 7:
                    message.fuzzyRange = reader.int32();
                    break;
                case /* bool Unk3300_OFGONAMNIJG = 6 [json_name = "Unk3300OFGONAMNIJG"];*/ 6:
                    message.unk3300OFGONAMNIJG = reader.bool();
                    break;
                case /* uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
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
    internalBinaryWrite(message: ToTheMoonQueryPathReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ToTheMoonQueryPathReq.OptionType query_type = 5; */
        if (message.queryType !== 0)
            writer.tag(5, WireType.Varint).int32(message.queryType);
        /* bool Unk3300_BBLMBILIOGP = 8 [json_name = "Unk3300BBLMBILIOGP"]; */
        if (message.unk3300BBLMBILIOGP !== false)
            writer.tag(8, WireType.Varint).bool(message.unk3300BBLMBILIOGP);
        /* ToTheMoonQueryPathReq.FilterType filter_type = 13; */
        if (message.filterType !== 0)
            writer.tag(13, WireType.Varint).int32(message.filterType);
        /* int32 query_id = 2; */
        if (message.queryId !== 0)
            writer.tag(2, WireType.Varint).int32(message.queryId);
        /* ToTheMoonQueryPathReq.AStarMethod astar_method = 12; */
        if (message.astarMethod !== 0)
            writer.tag(12, WireType.Varint).int32(message.astarMethod);
        /* Vector source_pos = 11; */
        if (message.sourcePos)
            Vector.internalBinaryWrite(message.sourcePos, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* Vector destination_pos = 3; */
        if (message.destinationPos)
            Vector.internalBinaryWrite(message.destinationPos, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* int32 fuzzy_range = 7; */
        if (message.fuzzyRange !== 0)
            writer.tag(7, WireType.Varint).int32(message.fuzzyRange);
        /* bool Unk3300_OFGONAMNIJG = 6 [json_name = "Unk3300OFGONAMNIJG"]; */
        if (message.unk3300OFGONAMNIJG !== false)
            writer.tag(6, WireType.Varint).bool(message.unk3300OFGONAMNIJG);
        /* uint32 scene_id = 4; */
        if (message.sceneId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ToTheMoonQueryPathReq
 */
export const ToTheMoonQueryPathReq = new ToTheMoonQueryPathReq$Type();
