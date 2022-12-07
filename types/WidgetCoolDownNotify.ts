// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "WidgetCoolDownNotify.proto" (syntax proto3)
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
import { WidgetCoolDownData } from "./WidgetCoolDownData";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4268;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message WidgetCoolDownNotify
 */
export interface WidgetCoolDownNotify {
    /**
     * @generated from protobuf field: repeated WidgetCoolDownData normal_cool_down_data_list = 2;
     */
    normalCoolDownDataList: WidgetCoolDownData[];
    /**
     * @generated from protobuf field: repeated WidgetCoolDownData group_cool_down_data_list = 14;
     */
    groupCoolDownDataList: WidgetCoolDownData[];
}
// @generated message type with reflection information, may provide speed optimized methods
class WidgetCoolDownNotify$Type extends MessageType<WidgetCoolDownNotify> {
    constructor() {
        super("WidgetCoolDownNotify", [
            { no: 2, name: "normal_cool_down_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WidgetCoolDownData },
            { no: 14, name: "group_cool_down_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WidgetCoolDownData }
        ]);
    }
    create(value?: PartialMessage<WidgetCoolDownNotify>): WidgetCoolDownNotify {
        const message = { normalCoolDownDataList: [], groupCoolDownDataList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WidgetCoolDownNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WidgetCoolDownNotify): WidgetCoolDownNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated WidgetCoolDownData normal_cool_down_data_list */ 2:
                    message.normalCoolDownDataList.push(WidgetCoolDownData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated WidgetCoolDownData group_cool_down_data_list */ 14:
                    message.groupCoolDownDataList.push(WidgetCoolDownData.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: WidgetCoolDownNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated WidgetCoolDownData normal_cool_down_data_list = 2; */
        for (let i = 0; i < message.normalCoolDownDataList.length; i++)
            WidgetCoolDownData.internalBinaryWrite(message.normalCoolDownDataList[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated WidgetCoolDownData group_cool_down_data_list = 14; */
        for (let i = 0; i < message.groupCoolDownDataList.length; i++)
            WidgetCoolDownData.internalBinaryWrite(message.groupCoolDownDataList[i], writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WidgetCoolDownNotify
 */
export const WidgetCoolDownNotify = new WidgetCoolDownNotify$Type();
