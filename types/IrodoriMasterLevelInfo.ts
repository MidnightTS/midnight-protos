// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "IrodoriMasterLevelInfo.proto" (syntax proto3)
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
import { IrodoriMasterLevelDetailInfo } from "./IrodoriMasterLevelDetailInfo";
/**
 * @generated from protobuf message IrodoriMasterLevelInfo
 */
export interface IrodoriMasterLevelInfo {
    /**
     * @generated from protobuf field: repeated IrodoriMasterLevelDetailInfo detail_info = 1;
     */
    detailInfo: IrodoriMasterLevelDetailInfo[];
    /**
     * @generated from protobuf field: uint32 level_id = 7;
     */
    levelId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriMasterLevelInfo$Type extends MessageType<IrodoriMasterLevelInfo> {
    constructor() {
        super("IrodoriMasterLevelInfo", [
            { no: 1, name: "detail_info", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => IrodoriMasterLevelDetailInfo },
            { no: 7, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<IrodoriMasterLevelInfo>): IrodoriMasterLevelInfo {
        const message = { detailInfo: [], levelId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<IrodoriMasterLevelInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IrodoriMasterLevelInfo): IrodoriMasterLevelInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated IrodoriMasterLevelDetailInfo detail_info */ 1:
                    message.detailInfo.push(IrodoriMasterLevelDetailInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 level_id */ 7:
                    message.levelId = reader.uint32();
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
    internalBinaryWrite(message: IrodoriMasterLevelInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated IrodoriMasterLevelDetailInfo detail_info = 1; */
        for (let i = 0; i < message.detailInfo.length; i++)
            IrodoriMasterLevelDetailInfo.internalBinaryWrite(message.detailInfo[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* uint32 level_id = 7; */
        if (message.levelId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.levelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriMasterLevelInfo
 */
export const IrodoriMasterLevelInfo = new IrodoriMasterLevelInfo$Type();