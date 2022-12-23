"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeGetFishFarmingInfoRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeFishFarmingInfo_1 = require("./HomeFishFarmingInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomeGetFishFarmingInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeGetFishFarmingInfoRsp", [
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "fish_farming_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeFishFarmingInfo_1.HomeFishFarmingInfo }
        ]);
    }
    create(value) {
        const message = { retcode: 0, fishFarmingInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
                    break;
                case /* repeated HomeFishFarmingInfo fish_farming_info_list */ 12:
                    message.fishFarmingInfoList.push(HomeFishFarmingInfo_1.HomeFishFarmingInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated HomeFishFarmingInfo fish_farming_info_list = 12; */
        for (let i = 0; i < message.fishFarmingInfoList.length; i++)
            HomeFishFarmingInfo_1.HomeFishFarmingInfo.internalBinaryWrite(message.fishFarmingInfoList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeGetFishFarmingInfoRsp
 */
exports.HomeGetFishFarmingInfoRsp = new HomeGetFishFarmingInfoRsp$Type();
