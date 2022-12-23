"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetActivityShopSheetInfoRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ActivityShopSheetInfo_1 = require("./ActivityShopSheetInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GetActivityShopSheetInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetActivityShopSheetInfoRsp", [
            { no: 15, name: "shop_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "sheet_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ActivityShopSheetInfo_1.ActivityShopSheetInfo }
        ]);
    }
    create(value) {
        const message = { shopType: 0, retcode: 0, sheetInfoList: [] };
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
                case /* uint32 shop_type */ 15:
                    message.shopType = reader.uint32();
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* repeated ActivityShopSheetInfo sheet_info_list */ 4:
                    message.sheetInfoList.push(ActivityShopSheetInfo_1.ActivityShopSheetInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 shop_type = 15; */
        if (message.shopType !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.shopType);
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated ActivityShopSheetInfo sheet_info_list = 4; */
        for (let i = 0; i < message.sheetInfoList.length; i++)
            ActivityShopSheetInfo_1.ActivityShopSheetInfo.internalBinaryWrite(message.sheetInfoList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetActivityShopSheetInfoRsp
 */
exports.GetActivityShopSheetInfoRsp = new GetActivityShopSheetInfoRsp$Type();
