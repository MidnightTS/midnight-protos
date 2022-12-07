// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "WidgetDoBagReq.proto" (syntax proto3)
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
import { WidgetCreatorInfo } from "./WidgetCreatorInfo";
import { WidgetCreateLocationInfo } from "./WidgetCreateLocationInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4269;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message WidgetDoBagReq
 */
export interface WidgetDoBagReq {
    /**
     * @generated from protobuf field: uint32 material_id = 11;
     */
    materialId: number;
    /**
     * @generated from protobuf oneof: op_info
     */
    opInfo: {
        oneofKind: "locationInfo";
        /**
         * @generated from protobuf field: WidgetCreateLocationInfo location_info = 434;
         */
        locationInfo: WidgetCreateLocationInfo;
    } | {
        oneofKind: "widgetCreatorInfo";
        /**
         * @generated from protobuf field: WidgetCreatorInfo widget_creator_info = 1338;
         */
        widgetCreatorInfo: WidgetCreatorInfo;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class WidgetDoBagReq$Type extends MessageType<WidgetDoBagReq> {
    constructor() {
        super("WidgetDoBagReq", [
            { no: 11, name: "material_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 434, name: "location_info", kind: "message", oneof: "opInfo", T: () => WidgetCreateLocationInfo },
            { no: 1338, name: "widget_creator_info", kind: "message", oneof: "opInfo", T: () => WidgetCreatorInfo }
        ]);
    }
    create(value?: PartialMessage<WidgetDoBagReq>): WidgetDoBagReq {
        const message = { materialId: 0, opInfo: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WidgetDoBagReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WidgetDoBagReq): WidgetDoBagReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 material_id */ 11:
                    message.materialId = reader.uint32();
                    break;
                case /* WidgetCreateLocationInfo location_info */ 434:
                    message.opInfo = {
                        oneofKind: "locationInfo",
                        locationInfo: WidgetCreateLocationInfo.internalBinaryRead(reader, reader.uint32(), options, (message.opInfo as any).locationInfo)
                    };
                    break;
                case /* WidgetCreatorInfo widget_creator_info */ 1338:
                    message.opInfo = {
                        oneofKind: "widgetCreatorInfo",
                        widgetCreatorInfo: WidgetCreatorInfo.internalBinaryRead(reader, reader.uint32(), options, (message.opInfo as any).widgetCreatorInfo)
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
    internalBinaryWrite(message: WidgetDoBagReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 material_id = 11; */
        if (message.materialId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.materialId);
        /* WidgetCreateLocationInfo location_info = 434; */
        if (message.opInfo.oneofKind === "locationInfo")
            WidgetCreateLocationInfo.internalBinaryWrite(message.opInfo.locationInfo, writer.tag(434, WireType.LengthDelimited).fork(), options).join();
        /* WidgetCreatorInfo widget_creator_info = 1338; */
        if (message.opInfo.oneofKind === "widgetCreatorInfo")
            WidgetCreatorInfo.internalBinaryWrite(message.opInfo.widgetCreatorInfo, writer.tag(1338, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetDoBagReq
 */
export const WidgetDoBagReq = new WidgetDoBagReq$Type();