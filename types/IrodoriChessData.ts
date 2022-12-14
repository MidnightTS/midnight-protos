// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "IrodoriChessData.proto" (syntax proto3)
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
import { IrodoriChessLevelData } from "./IrodoriChessLevelData";
/**
 * @generated from protobuf message IrodoriChessData
 */
export interface IrodoriChessData {
    /**
     * @generated from protobuf field: bool is_open = 8;
     */
    isOpen: boolean;
    /**
     * @generated from protobuf field: repeated IrodoriChessLevelData level_data_list = 13;
     */
    levelDataList: IrodoriChessLevelData[];
}
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessData$Type extends MessageType<IrodoriChessData> {
    constructor() {
        super("IrodoriChessData", [
            { no: 8, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "level_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => IrodoriChessLevelData }
        ]);
    }
    create(value?: PartialMessage<IrodoriChessData>): IrodoriChessData {
        const message = { isOpen: false, levelDataList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<IrodoriChessData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IrodoriChessData): IrodoriChessData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_open */ 8:
                    message.isOpen = reader.bool();
                    break;
                case /* repeated IrodoriChessLevelData level_data_list */ 13:
                    message.levelDataList.push(IrodoriChessLevelData.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: IrodoriChessData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_open = 8; */
        if (message.isOpen !== false)
            writer.tag(8, WireType.Varint).bool(message.isOpen);
        /* repeated IrodoriChessLevelData level_data_list = 13; */
        for (let i = 0; i < message.levelDataList.length; i++)
            IrodoriChessLevelData.internalBinaryWrite(message.levelDataList[i], writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriChessData
 */
export const IrodoriChessData = new IrodoriChessData$Type();
