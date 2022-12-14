// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "AllWidgetDataNotify.proto" (syntax proto3)
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
import { AnchorPointData } from "./AnchorPointData";
import { WeatherWizardData } from "./WeatherWizardData";
import { ClientCollectorData } from "./ClientCollectorData";
import { SkyCrystalDetectorData } from "./SkyCrystalDetectorData";
import { WidgetCoolDownData } from "./WidgetCoolDownData";
import { WidgetSlotData } from "./WidgetSlotData";
import { OneoffGatherPointDetectorData } from "./OneoffGatherPointDetectorData";
import { LunchBoxData } from "./LunchBoxData";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4286;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message AllWidgetDataNotify
 */
export interface AllWidgetDataNotify {
    /**
     * @generated from protobuf field: uint32 next_anchor_point_usable_time = 5;
     */
    nextAnchorPointUsableTime: number;
    /**
     * @generated from protobuf field: LunchBoxData lunch_box_data = 1;
     */
    lunchBoxData?: LunchBoxData;
    /**
     * @generated from protobuf field: repeated OneoffGatherPointDetectorData oneoff_gather_point_detector_data_list = 14;
     */
    oneoffGatherPointDetectorDataList: OneoffGatherPointDetectorData[];
    /**
     * @generated from protobuf field: repeated WidgetSlotData slot_list = 6;
     */
    slotList: WidgetSlotData[];
    /**
     * @generated from protobuf field: repeated uint32 background_active_widget_list = 9;
     */
    backgroundActiveWidgetList: number[];
    /**
     * @generated from protobuf field: repeated WidgetCoolDownData cool_down_group_data_list = 3;
     */
    coolDownGroupDataList: WidgetCoolDownData[];
    /**
     * @generated from protobuf field: SkyCrystalDetectorData sky_crystal_detector_data = 4;
     */
    skyCrystalDetectorData?: SkyCrystalDetectorData;
    /**
     * @generated from protobuf field: repeated ClientCollectorData client_collector_data_list = 7;
     */
    clientCollectorDataList: ClientCollectorData[];
    /**
     * @generated from protobuf field: WeatherWizardData weather_wizard_data = 15;
     */
    weatherWizardData?: WeatherWizardData;
    /**
     * @generated from protobuf field: repeated WidgetCoolDownData normal_cool_down_data_list = 10;
     */
    normalCoolDownDataList: WidgetCoolDownData[];
    /**
     * @generated from protobuf field: repeated AnchorPointData anchor_point_list = 13;
     */
    anchorPointList: AnchorPointData[];
}
// @generated message type with reflection information, may provide speed optimized methods
class AllWidgetDataNotify$Type extends MessageType<AllWidgetDataNotify> {
    constructor() {
        super("AllWidgetDataNotify", [
            { no: 5, name: "next_anchor_point_usable_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "lunch_box_data", kind: "message", T: () => LunchBoxData },
            { no: 14, name: "oneoff_gather_point_detector_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => OneoffGatherPointDetectorData },
            { no: 6, name: "slot_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WidgetSlotData },
            { no: 9, name: "background_active_widget_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "cool_down_group_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WidgetCoolDownData },
            { no: 4, name: "sky_crystal_detector_data", kind: "message", T: () => SkyCrystalDetectorData },
            { no: 7, name: "client_collector_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ClientCollectorData },
            { no: 15, name: "weather_wizard_data", kind: "message", T: () => WeatherWizardData },
            { no: 10, name: "normal_cool_down_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WidgetCoolDownData },
            { no: 13, name: "anchor_point_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AnchorPointData }
        ]);
    }
    create(value?: PartialMessage<AllWidgetDataNotify>): AllWidgetDataNotify {
        const message = { nextAnchorPointUsableTime: 0, oneoffGatherPointDetectorDataList: [], slotList: [], backgroundActiveWidgetList: [], coolDownGroupDataList: [], clientCollectorDataList: [], normalCoolDownDataList: [], anchorPointList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AllWidgetDataNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AllWidgetDataNotify): AllWidgetDataNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 next_anchor_point_usable_time */ 5:
                    message.nextAnchorPointUsableTime = reader.uint32();
                    break;
                case /* LunchBoxData lunch_box_data */ 1:
                    message.lunchBoxData = LunchBoxData.internalBinaryRead(reader, reader.uint32(), options, message.lunchBoxData);
                    break;
                case /* repeated OneoffGatherPointDetectorData oneoff_gather_point_detector_data_list */ 14:
                    message.oneoffGatherPointDetectorDataList.push(OneoffGatherPointDetectorData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated WidgetSlotData slot_list */ 6:
                    message.slotList.push(WidgetSlotData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 background_active_widget_list */ 9:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.backgroundActiveWidgetList.push(reader.uint32());
                    else
                        message.backgroundActiveWidgetList.push(reader.uint32());
                    break;
                case /* repeated WidgetCoolDownData cool_down_group_data_list */ 3:
                    message.coolDownGroupDataList.push(WidgetCoolDownData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* SkyCrystalDetectorData sky_crystal_detector_data */ 4:
                    message.skyCrystalDetectorData = SkyCrystalDetectorData.internalBinaryRead(reader, reader.uint32(), options, message.skyCrystalDetectorData);
                    break;
                case /* repeated ClientCollectorData client_collector_data_list */ 7:
                    message.clientCollectorDataList.push(ClientCollectorData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* WeatherWizardData weather_wizard_data */ 15:
                    message.weatherWizardData = WeatherWizardData.internalBinaryRead(reader, reader.uint32(), options, message.weatherWizardData);
                    break;
                case /* repeated WidgetCoolDownData normal_cool_down_data_list */ 10:
                    message.normalCoolDownDataList.push(WidgetCoolDownData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated AnchorPointData anchor_point_list */ 13:
                    message.anchorPointList.push(AnchorPointData.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: AllWidgetDataNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 next_anchor_point_usable_time = 5; */
        if (message.nextAnchorPointUsableTime !== 0)
            writer.tag(5, WireType.Varint).uint32(message.nextAnchorPointUsableTime);
        /* LunchBoxData lunch_box_data = 1; */
        if (message.lunchBoxData)
            LunchBoxData.internalBinaryWrite(message.lunchBoxData, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated OneoffGatherPointDetectorData oneoff_gather_point_detector_data_list = 14; */
        for (let i = 0; i < message.oneoffGatherPointDetectorDataList.length; i++)
            OneoffGatherPointDetectorData.internalBinaryWrite(message.oneoffGatherPointDetectorDataList[i], writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* repeated WidgetSlotData slot_list = 6; */
        for (let i = 0; i < message.slotList.length; i++)
            WidgetSlotData.internalBinaryWrite(message.slotList[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 background_active_widget_list = 9; */
        if (message.backgroundActiveWidgetList.length) {
            writer.tag(9, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.backgroundActiveWidgetList.length; i++)
                writer.uint32(message.backgroundActiveWidgetList[i]);
            writer.join();
        }
        /* repeated WidgetCoolDownData cool_down_group_data_list = 3; */
        for (let i = 0; i < message.coolDownGroupDataList.length; i++)
            WidgetCoolDownData.internalBinaryWrite(message.coolDownGroupDataList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* SkyCrystalDetectorData sky_crystal_detector_data = 4; */
        if (message.skyCrystalDetectorData)
            SkyCrystalDetectorData.internalBinaryWrite(message.skyCrystalDetectorData, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated ClientCollectorData client_collector_data_list = 7; */
        for (let i = 0; i < message.clientCollectorDataList.length; i++)
            ClientCollectorData.internalBinaryWrite(message.clientCollectorDataList[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* WeatherWizardData weather_wizard_data = 15; */
        if (message.weatherWizardData)
            WeatherWizardData.internalBinaryWrite(message.weatherWizardData, writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* repeated WidgetCoolDownData normal_cool_down_data_list = 10; */
        for (let i = 0; i < message.normalCoolDownDataList.length; i++)
            WidgetCoolDownData.internalBinaryWrite(message.normalCoolDownDataList[i], writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* repeated AnchorPointData anchor_point_list = 13; */
        for (let i = 0; i < message.anchorPointList.length; i++)
            AnchorPointData.internalBinaryWrite(message.anchorPointList[i], writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AllWidgetDataNotify
 */
export const AllWidgetDataNotify = new AllWidgetDataNotify$Type();
