// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "IrodoriPoetryData.proto" (syntax proto3)
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
import { IrodoriPoetryThemeData } from "./IrodoriPoetryThemeData";
/**
 * @generated from protobuf message IrodoriPoetryData
 */
export interface IrodoriPoetryData {
    /**
     * @generated from protobuf field: repeated IrodoriPoetryThemeData theme_data_list = 2;
     */
    themeDataList: IrodoriPoetryThemeData[];
    /**
     * @generated from protobuf field: uint32 cur_theme_id = 12;
     */
    curThemeId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriPoetryData$Type extends MessageType<IrodoriPoetryData> {
    constructor() {
        super("IrodoriPoetryData", [
            { no: 2, name: "theme_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => IrodoriPoetryThemeData },
            { no: 12, name: "cur_theme_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<IrodoriPoetryData>): IrodoriPoetryData {
        const message = { themeDataList: [], curThemeId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<IrodoriPoetryData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IrodoriPoetryData): IrodoriPoetryData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated IrodoriPoetryThemeData theme_data_list */ 2:
                    message.themeDataList.push(IrodoriPoetryThemeData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 cur_theme_id */ 12:
                    message.curThemeId = reader.uint32();
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
    internalBinaryWrite(message: IrodoriPoetryData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated IrodoriPoetryThemeData theme_data_list = 2; */
        for (let i = 0; i < message.themeDataList.length; i++)
            IrodoriPoetryThemeData.internalBinaryWrite(message.themeDataList[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* uint32 cur_theme_id = 12; */
        if (message.curThemeId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.curThemeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriPoetryData
 */
export const IrodoriPoetryData = new IrodoriPoetryData$Type();
