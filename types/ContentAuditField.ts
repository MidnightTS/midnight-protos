// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ContentAuditField.proto" (syntax proto3)
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
import { ContentAuditData } from "./ContentAuditData";
/**
 * @generated from protobuf message ContentAuditField
 */
export interface ContentAuditField {
    /**
     * @generated from protobuf field: repeated ContentAuditData segment_list = 1;
     */
    segmentList: ContentAuditData[];
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class ContentAuditField$Type extends MessageType<ContentAuditField> {
    constructor() {
        super("ContentAuditField", [
            { no: 1, name: "segment_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ContentAuditData },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ContentAuditField>): ContentAuditField {
        const message = { segmentList: [], name: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ContentAuditField>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ContentAuditField): ContentAuditField {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated ContentAuditData segment_list */ 1:
                    message.segmentList.push(ContentAuditData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
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
    internalBinaryWrite(message: ContentAuditField, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated ContentAuditData segment_list = 1; */
        for (let i = 0; i < message.segmentList.length; i++)
            ContentAuditData.internalBinaryWrite(message.segmentList[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ContentAuditField
 */
export const ContentAuditField = new ContentAuditField$Type();