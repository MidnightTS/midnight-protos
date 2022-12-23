// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "IslandPartyGallerySettleInfo.proto" (syntax proto3)
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
import { OnlinePlayerInfo } from "./OnlinePlayerInfo";
import { ExhibitionDisplayInfo } from "./ExhibitionDisplayInfo";
/**
 * @generated from protobuf message IslandPartyGallerySettleInfo
 */
export interface IslandPartyGallerySettleInfo {
    /**
     * @generated from protobuf field: repeated ExhibitionDisplayInfo card_list = 1;
     */
    cardList: ExhibitionDisplayInfo[];
    /**
     * @generated from protobuf field: OnlinePlayerInfo player_info = 7;
     */
    playerInfo?: OnlinePlayerInfo;
}
// @generated message type with reflection information, may provide speed optimized methods
class IslandPartyGallerySettleInfo$Type extends MessageType<IslandPartyGallerySettleInfo> {
    constructor() {
        super("IslandPartyGallerySettleInfo", [
            { no: 1, name: "card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExhibitionDisplayInfo },
            { no: 7, name: "player_info", kind: "message", T: () => OnlinePlayerInfo }
        ]);
    }
    create(value?: PartialMessage<IslandPartyGallerySettleInfo>): IslandPartyGallerySettleInfo {
        const message = { cardList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<IslandPartyGallerySettleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: IslandPartyGallerySettleInfo): IslandPartyGallerySettleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated ExhibitionDisplayInfo card_list */ 1:
                    message.cardList.push(ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* OnlinePlayerInfo player_info */ 7:
                    message.playerInfo = OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
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
    internalBinaryWrite(message: IslandPartyGallerySettleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated ExhibitionDisplayInfo card_list = 1; */
        for (let i = 0; i < message.cardList.length; i++)
            ExhibitionDisplayInfo.internalBinaryWrite(message.cardList[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* OnlinePlayerInfo player_info = 7; */
        if (message.playerInfo)
            OnlinePlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IslandPartyGallerySettleInfo
 */
export const IslandPartyGallerySettleInfo = new IslandPartyGallerySettleInfo$Type();
