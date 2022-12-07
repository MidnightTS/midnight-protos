// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "IrodoriFlowerData.proto" (syntax proto3)
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
import { ItemParam } from "./ItemParam";
/**
 * @generated from protobuf message IrodoriFlowerData
 */
export interface IrodoriFlowerData {
    /**
     * @generated from protobuf field: repeated uint32 finished_theme_list = 10;
     */
    finishedThemeList: number[];
    /**
     * @generated from protobuf field: repeated ItemParam used_flower_list = 8;
     */
    usedFlowerList: ItemParam[];
}
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriFlowerData$Type extends MessageType<IrodoriFlowerData> {
    constructor() {
        super("IrodoriFlowerData", [
            { no: 10, name: "finished_theme_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "used_flower_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam }
        ]);
    }
    create(value?: PartialMessage<IrodoriFlowerData>): IrodoriFlowerData {
        const message = { finishedThemeList: [], usedFlowerList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<IrodoriFlowerData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IrodoriFlowerData): IrodoriFlowerData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 finished_theme_list */ 10:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedThemeList.push(reader.uint32());
                    else
                        message.finishedThemeList.push(reader.uint32());
                    break;
                case /* repeated ItemParam used_flower_list */ 8:
                    message.usedFlowerList.push(ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: IrodoriFlowerData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 finished_theme_list = 10; */
        if (message.finishedThemeList.length) {
            writer.tag(10, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishedThemeList.length; i++)
                writer.uint32(message.finishedThemeList[i]);
            writer.join();
        }
        /* repeated ItemParam used_flower_list = 8; */
        for (let i = 0; i < message.usedFlowerList.length; i++)
            ItemParam.internalBinaryWrite(message.usedFlowerList[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriFlowerData
 */
export const IrodoriFlowerData = new IrodoriFlowerData$Type();
